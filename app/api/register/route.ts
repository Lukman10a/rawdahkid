import { NextResponse } from "next/server";
import { RegistrationRepository } from "@/lib/repositories/registration.repository";
import { DuplicateEmailError, ValidationError, DbError } from "@/lib/repositories/errors";
import { sendRegistrationConfirmation } from "@/lib/email/resend";
import { toE164 } from "@/lib/services/registration.service";
import { countries } from "@/lib/countries";

export const runtime = "nodejs";

const API_ORIGIN = process.env.API_SERVER_BASE_URL || "https://rawdoh.pxxl.click/api";

function hasSupabaseEnv() {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL) && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
}

async function dualWriteLegacy(payload: unknown) {
  if (process.env.LEGACY_UPSTREAM_SYNC === "false") return;
  try {
    await fetch(`${API_ORIGIN}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[legacy] dual-write failed", err);
  }
}

function parseCityCountry(cityCountry: string, fallbackCountryCode?: string) {
  if (!cityCountry) return { city: "", countryCode: fallbackCountryCode || "" };
  const parts = cityCountry.split(",").map((s) => s.trim());
  if (parts.length >= 2) {
    return { city: parts[0], countryCode: parts[parts.length - 1] };
  }
  // if single value, treat as city if fallback exists, else as country
  if (fallbackCountryCode) return { city: cityCountry, countryCode: fallbackCountryCode };
  return { city: "", countryCode: cityCountry };
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }

  // Fallback to legacy proxy if Supabase not configured (dev before setup)
  if (!hasSupabaseEnv()) {
    console.warn("[register] Supabase env missing, proxying to legacy");
    try {
      const upstreamResponse = await fetch(`${API_ORIGIN}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      const contentType = upstreamResponse.headers.get("content-type") || "application/json";
      const body = await upstreamResponse.text();
      return new NextResponse(body, {
        status: upstreamResponse.status,
        headers: { "Content-Type": contentType },
      });
    } catch {
      return NextResponse.json({ success: false, message: "Unable to reach registration service" }, { status: 502 });
    }
  }

  // Extract fields supporting both legacy (fullName) and form-direct shapes
  const fullName = String(payload.fullName ?? payload.parentName ?? "").trim();
  const email = String(payload.email ?? payload.parentEmail ?? "").trim();
  const rawPhone = String(payload.phoneNumber ?? payload.parentPhone ?? "").trim();
  const parentCountry = String(payload.parentCountry ?? "").trim();
  const cityCountryRaw = String(payload.cityCountry ?? payload.parentCity ?? "").trim();
  const childName = String(payload.childName ?? payload.studentName ?? "").trim();
  const childAgeRaw = payload.childAge ?? payload.studentAge ?? "";
  const childAge = typeof childAgeRaw === "number" ? childAgeRaw : Number.parseInt(String(childAgeRaw), 10);
  const programmeInterest = String(payload.programmeInterest ?? payload.programme ?? "").trim();
  const classFormat = String(payload.classFormat ?? "").trim();
  const selectedCourses = Array.isArray(payload.selectedCourses) ? (payload.selectedCourses as string[]) : [];
  const additionalInfo = String(payload.additionalInfo ?? "").trim();
  const planId = (payload.planId as string) || null;

  // Basic validation (mirrors lib/validation/registration.ts, kept inline to avoid zod decode mismatch with legacy shape)
  if (!fullName || !email || !rawPhone || !childName || !programmeInterest || !classFormat) {
    return NextResponse.json(
      { success: false, message: "Missing required fields", details: { fullName, email } },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
  }
  const age = Number.isNaN(childAge) ? 0 : childAge;
  if (age < 5 || age > 18) {
    return NextResponse.json({ success: false, message: "Age must be between 5 and 18" }, { status: 400 });
  }
  const programmeLower = programmeInterest.toLowerCase();
  const isIndividual = programmeLower.includes("individual") || programmeLower === "individual";
  if (isIndividual && selectedCourses.length === 0) {
    return NextResponse.json(
      { success: false, message: "Select at least one course for Individual programme" },
      { status: 400 },
    );
  }

  // Normalize phone and cityCountry
  let countryCode = parentCountry;
  let city = "";
  if (cityCountryRaw.includes(",")) {
    const parsed = parseCityCountry(cityCountryRaw, parentCountry);
    city = parsed.city;
    countryCode = parsed.countryCode || parentCountry;
  } else if (parentCountry) {
    // cityCountryRaw is city, parentCountry is country
    city = cityCountryRaw;
    countryCode = parentCountry;
  } else {
    const parsed = parseCityCountry(cityCountryRaw);
    city = parsed.city;
    countryCode = parsed.countryCode;
  }

  // Validate country code if present
  if (countryCode && !countries.some((c) => c.code === countryCode)) {
    // allow unknown codes, just keep as-is for phone fallback
  }

  const phoneE164 = toE164(rawPhone, countryCode);

  const repo = new RegistrationRepository();

  try {
    const row = await repo.create({
      email,
      fullName,
      phoneE164,
      city,
      countryCode,
      childName,
      childAge: age,
      programmeInterest,
      classFormat,
      selectedCourses,
      additionalInfo,
      planId,
    });

    // D1 non-blocking dual-write
    void dualWriteLegacy(payload);

    // Email (non-blocking success, but we await to report emailSent)
    let emailSent = false;
    try {
      emailSent = await sendRegistrationConfirmation({
        to: email,
        parentName: fullName,
        childName,
        programmeInterest,
        classFormat,
      });
    } catch (err) {
      console.error("[email] send failed", err);
    }

    return NextResponse.json(
      { success: true, message: "Student registered successfully", data: row, emailSent },
      { status: 201 },
    );
  } catch (err) {
    if (err instanceof DuplicateEmailError) {
      // B2: resend confirmation on duplicate, still 409
      let emailSent = false;
      try {
        emailSent = await sendRegistrationConfirmation({
          to: email,
          parentName: fullName,
          childName,
          programmeInterest,
          classFormat,
        });
      } catch (e) {
        console.error("[email] resend on duplicate failed", e);
      }
      // Attach emailSent to error for test hooks if needed
      (err as DuplicateEmailError & { emailSent?: boolean }).emailSent = emailSent;
      return NextResponse.json(
        { success: false, message: "Email already registered", emailSent, code: "DUPLICATE_EMAIL" },
        { status: 409 },
      );
    }
    if (err instanceof ValidationError) {
      return NextResponse.json({ success: false, message: err.message, details: err.details }, { status: 400 });
    }
    if (err instanceof DbError) {
      console.error("[register] db error", err);
      return NextResponse.json({ success: false, message: "Database error" }, { status: 500 });
    }
    // Fallback: check duplicate by message
    const msg = err instanceof Error ? err.message : String(err);
    if (/duplicate|already exists/i.test(msg)) {
      let emailSent = false;
      try {
        emailSent = await sendRegistrationConfirmation({
          to: email,
          parentName: fullName,
          childName,
          programmeInterest,
          classFormat,
        });
      } catch {}
      return NextResponse.json(
        { success: false, message: "Email already registered", emailSent, code: "DUPLICATE_EMAIL" },
        { status: 409 },
      );
    }
    console.error("[register] unexpected", err);
    return NextResponse.json({ success: false, message: "Registration failed" }, { status: 500 });
  }
}
