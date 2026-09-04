import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

type Registration = {
  id: string;
  email: string;
  full_name: string;
  phone_e164: string;
  city: string | null;
  country_code: string | null;
  child_name: string;
  child_age: number;
  programme_interest: string;
  class_format: string;
  selected_courses: string[];
  additional_info: string | null;
  plan_id: string | null;
  created_at: string;
};

function isAuthorized(request: Request) {
  const expected = process.env.ADMIN_REGISTRATIONS_TOKEN;
  return !!expected && request.headers.get("x-admin-token") === expected;
}

function csvCell(value: unknown) {
  const text = Array.isArray(value) ? value.join(", ") : String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function toCsv(rows: Registration[]) {
  const headers = [
    "id",
    "created_at",
    "email",
    "full_name",
    "phone_e164",
    "city",
    "country_code",
    "child_name",
    "child_age",
    "programme_interest",
    "class_format",
    "selected_courses",
    "additional_info",
    "plan_id",
  ];
  return [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((header) => csvCell(row[header as keyof Registration]))
        .join(","),
    ),
  ].join("\r\n");
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { success: false, message: "Admin token required" },
      { status: 401 },
    );
  }

  const { data, error } = await createServiceClient()
    .from("registrations")
    .select(
      "id,email,full_name,phone_e164,city,country_code,child_name,child_age,programme_interest,class_format,selected_courses,additional_info,plan_id,created_at",
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[admin registrations] db error", error);
    return NextResponse.json(
      { success: false, message: "Unable to load registrations" },
      { status: 500 },
    );
  }

  const rows = (data ?? []) as Registration[];
  if (new URL(request.url).searchParams.get("format") === "csv") {
    return new Response(`\uFEFF${toCsv(rows)}`, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="registrations-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  return NextResponse.json({ success: true, registrations: rows });
}
