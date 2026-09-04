import { z } from "zod";
import { countries } from "@/lib/countries";

const countryCodes = countries.map((c) => c.code) as [string, ...string[]];

export const registrationSchema = z
  .object({
    fullName: z.string().trim().min(2, "Parent name is required"),
    email: z.string().trim().toLowerCase().email("Invalid email"),
    phoneNumber: z.string().trim().min(6, "Phone is required"),
    parentCountry: z.enum(countryCodes).optional(),
    cityCountry: z.string().trim().optional().default(""),
    city: z.string().trim().optional().default(""),
    countryCode: z.string().trim().optional().default(""),
    childName: z.string().trim().min(2, "Child name is required"),
    childAge: z.coerce.number().int().min(5, "Age must be 5-18").max(18, "Age must be 5-18"),
    programmeInterest: z.string().trim().min(1, "Programme is required"),
    classFormat: z.string().trim().min(1, "Class format is required"),
    selectedCourses: z.array(z.string()).default([]),
    additionalInfo: z.string().trim().optional().default(""),
    planId: z.string().trim().optional().nullable().default(null),
    parentCity: z.string().trim().optional().default(""),
  })
  .superRefine((data, ctx) => {
    const programme = data.programmeInterest.toLowerCase();
    if (programme.includes("individual") && data.selectedCourses.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["selectedCourses"],
        message: "Select at least one course for Individual programme",
      });
    }
  });

export type RegistrationInput = z.infer<typeof registrationSchema>;
