import { RegistrationRepository, type CreateRegistrationDto } from "@/lib/repositories/registration.repository";
import { DuplicateEmailError } from "@/lib/repositories/errors";
import { sendRegistrationConfirmation } from "@/lib/email/resend";
import { countries } from "@/lib/countries";

const API_ORIGIN = process.env.API_SERVER_BASE_URL || "https://rawdoh.pxxl.click/api";
const LEGACY_SYNC = process.env.LEGACY_UPSTREAM_SYNC !== "false";

function getDial(countryCode: string): string | null {
  const c = countries.find((x) => x.code === countryCode);
  return c ? c.dialCode : null;
}

function toE164(phone: string, countryCode?: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (countryCode) {
    const dial = getDial(countryCode);
    if (dial) {
      const national = digits.replace(/^0+/, "");
      return `${dial}${national}`;
    }
  }
  return digits.startsWith("+") ? digits : `+${digits}`;
}

export async function dualWriteLegacy(payload: Record<string, unknown>) {
  if (!LEGACY_SYNC) return;
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

export async function registerWithSideEffects(
  dto: CreateRegistrationDto,
  legacyPayload: Record<string, unknown>,
  repo = new RegistrationRepository(),
) {
  // D1 non-blocking: try create; on duplicate we still resend email (B2)
  try {
    const row = await repo.create(dto);
    // Fire-and-forget legacy + await email but don't block success on email failure
    void dualWriteLegacy(legacyPayload);
    const emailSent = await sendRegistrationConfirmation({
      to: dto.email,
      parentName: dto.fullName,
      childName: dto.childName,
      programmeInterest: dto.programmeInterest,
      classFormat: dto.classFormat,
    });
    return { row, emailSent, duplicate: false as const };
  } catch (err) {
    if (err instanceof DuplicateEmailError) {
      // B2: resend confirmation even on duplicate
      const emailSent = await sendRegistrationConfirmation({
        to: dto.email,
        parentName: dto.fullName,
        childName: dto.childName,
        programmeInterest: dto.programmeInterest,
        classFormat: dto.classFormat,
      });
      throw Object.assign(err, { emailSent });
    }
    throw err;
  }
}

export { toE164 };
