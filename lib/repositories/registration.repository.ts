import { createServiceClient, resetServiceClientForTest } from "@/lib/supabase/server";
import { DuplicateEmailError, DbError } from "@/lib/repositories/errors";
import type { SupabaseClient } from "@supabase/supabase-js";

export type RegistrationRow = {
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
  updated_at: string;
};

export type CreateRegistrationDto = {
  email: string;
  fullName: string;
  phoneE164: string;
  city: string;
  countryCode: string;
  childName: string;
  childAge: number;
  programmeInterest: string;
  classFormat: string;
  selectedCourses: string[];
  additionalInfo: string;
  planId?: string | null;
};

function getClient(injected?: SupabaseClient) {
  return injected ?? createServiceClient();
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export class RegistrationRepository {
  constructor(private readonly client?: SupabaseClient) {}

  async findByEmail(email: string, injected?: SupabaseClient): Promise<RegistrationRow | null> {
    const sb = getClient(injected ?? this.client);
    const normalized = normalizeEmail(email);
    const { data, error } = await sb
      .from("registrations")
      .select("*")
      .eq("email", normalized)
      .maybeSingle();

    if (error) throw new DbError(error.message, error);
    return (data as RegistrationRow | null) ?? null;
  }

  async exists(email: string, injected?: SupabaseClient): Promise<boolean> {
    const row = await this.findByEmail(email, injected ?? this.client);
    return !!row;
  }

  async create(dto: CreateRegistrationDto, injected?: SupabaseClient): Promise<RegistrationRow> {
    const sb = getClient(injected ?? this.client);
    const normalized = normalizeEmail(dto.email);

    const payload = {
      email: normalized,
      full_name: dto.fullName,
      phone_e164: dto.phoneE164,
      city: dto.city || null,
      country_code: dto.countryCode || null,
      child_name: dto.childName,
      child_age: dto.childAge,
      programme_interest: dto.programmeInterest,
      class_format: dto.classFormat,
      selected_courses: dto.selectedCourses,
      additional_info: dto.additionalInfo || null,
      plan_id: dto.planId ?? null,
    };

    const { data, error } = await sb.from("registrations").insert(payload).select().single();

    if (error) {
      const code = (error as { code?: string }).code;
      const msg = (error.message || "").toLowerCase();
      if (code === "23505" || msg.includes("duplicate") || msg.includes("already exists")) {
        throw new DuplicateEmailError("Email already registered", normalized);
      }
      throw new DbError(error.message, error);
    }

    return data as RegistrationRow;
  }
}

// for tests
export { resetServiceClientForTest };
