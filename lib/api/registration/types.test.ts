import { mapFormDataToRegisterPayload } from "./types";
import type { FormData } from "@/components/enrol/types";
import type { Email } from "@/lib/types/branded";
import { expectTypeOf } from "expect-type";

describe("mapFormDataToRegisterPayload — RED: phone & cityCountry not yet fixed", () => {
  function baseForm(overrides: Partial<FormData> = {}): FormData {
    return {
      parentName: "Abdullah Rahman",
      parentEmail: "Abdullah@Example.com ",
      parentPhone: "8089287065",
      parentCity: "Lagos",
      parentCountry: "NG",
      studentName: "Yusuf",
      studentAge: "8",
      programme: "islamic",
      classFormat: "group",
      additionalInfo: "hello",
      ...overrides,
    };
  }

  it("should normalize email to lower and brand as Email", () => {
    const payload = mapFormDataToRegisterPayload(baseForm(), []);
    expect(payload.email).toBe("abdullah@example.com");
    expectTypeOf(payload.email).toMatchTypeOf<string>();
    // Guardrail: Email branded type should be assignable to string but not vice versa
    // This test documents intent — will be enforced via branded type in next green phase
    const email: Email = payload.email as Email;
    expect(email).toBe("abdullah@example.com");
  });

  it("should concat parentCountry dial with phoneNumber (full international)", () => {
    const form = baseForm({ parentCountry: "NG", parentPhone: "8089287065", parentCity: "Lagos" });
    const payload = mapFormDataToRegisterPayload(form, []);
    // Current impl: phoneNumber = "8089287065" (ignores country)
    // Expected: should include country, e.g. "+2348089287065" or at least contain country code
    // For TDD red, we assert it contains country code — will fail now
    expect(payload.phoneNumber).toContain("234");
    expect(payload.phoneNumber).not.toBe("8089287065");
  });

  it("should include parentCountry in cityCountry", () => {
    const form = baseForm({ parentCity: "Lagos", parentCountry: "NG" });
    const payload = mapFormDataToRegisterPayload(form, []);
    // Current impl: cityCountry = "Lagos" (ignores country)
    // Expected: "Lagos, NG" or "Lagos, Nigeria"
    expect(payload.cityCountry).toContain("NG");
    expect(payload.cityCountry).toContain("Lagos");
  });

  it("should parse childAge as number, fallback 0 for invalid", () => {
    const payload = mapFormDataToRegisterPayload(baseForm({ studentAge: "8" }), []);
    expect(payload.childAge).toBe(8);
    const bad = mapFormDataToRegisterPayload(baseForm({ studentAge: "abc" }), []);
    expect(bad.childAge).toBe(0);
  });

  it("should normalize programmeInterest and classFormat", () => {
    const payload = mapFormDataToRegisterPayload(baseForm({ programme: "dual", classFormat: "group" }), []);
    expect(payload.programmeInterest).toBe("Dual Curriculum");
    expect(payload.classFormat).toBe("Group Class");
  });
});
