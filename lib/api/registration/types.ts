import type { FormData } from "@/components/enrol/types";

export type RegisterStudentPayload = {
  fullName: string;
  email: string;
  phoneNumber: string;
  cityCountry: string;
  childName: string;
  childAge: number;
  programmeInterest: string;
  classFormat: string;
  selectedCourses: string[];
  additionalInfo: string;
};

export type RegisteredStudent = {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  cityCountry: string;
  childName: string;
  childAge: number;
  programmeInterest: string;
  classFormat: string;
  selectedCourses: string[];
  additionalInfo: string;
  hasActiveSubscription: boolean;
  payments: unknown[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type RegisterStudentResponse = {
  success: boolean;
  message: string;
  data: RegisteredStudent;
};

type RegisterStudentRawResponse =
  | string
  | {
      success?: boolean;
      message?: string;
      data?: RegisteredStudent;
      [key: string]: unknown;
    };

export function normalizeRegisterStudentResponse(
  raw: RegisterStudentRawResponse,
): RegisterStudentResponse {
  if (typeof raw === "string") {
    return {
      success: !/error|failed/i.test(raw),
      message: raw,
      data: {} as RegisteredStudent,
    };
  }

  const success =
    typeof raw.success === "boolean"
      ? raw.success
      : !/error|failed/i.test(raw.message || "");

  return {
    success,
    message:
      typeof raw.message === "string"
        ? raw.message
        : success
          ? "Student registered successfully"
          : "Registration failed",
    data: (raw.data || ({} as RegisteredStudent)) as RegisteredStudent,
  };
}

const programmeLabelMap: Record<string, string> = {
  dual: "Dual Curriculum (Islamic & Western Bundle) - Best Value",
  islamic: "Islamic Programme Only",
  western: "Western Programme Only",
  individual: "Individual Specialized Courses",
};

const classFormatLabelMap: Record<string, string> = {
  group: "Group Class",
  "one-on-one": "One-on-One Class",
};

function normalizeKey(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function toProgrammeInterest(value: string) {
  const key = normalizeKey(value);
  return programmeLabelMap[key] || value.trim();
}

function toClassFormat(value: string) {
  const key = normalizeKey(value);

  if (key === "group" || key === "group class" || key === "group class (max 5 students)") {
    return "Group Class";
  }

  if (
    key === "one-on-one" ||
    key === "one on one" ||
    key === "one-on-one class" ||
    key === "one-on-one class (max 5 students)"
  ) {
    return "One-on-One Class";
  }

  return classFormatLabelMap[key] || value.trim();
}

export function mapFormDataToRegisterPayload(
  formData: FormData,
  selectedCourses: string[],
): RegisterStudentPayload {
  const parsedAge = Number.parseInt(formData.studentAge, 10);

  return {
    fullName: formData.parentName.trim(),
    email: formData.parentEmail.trim().toLowerCase(),
    phoneNumber: formData.parentPhone.trim(),
    cityCountry: formData.parentCity.trim(),
    childName: formData.studentName.trim(),
    childAge: Number.isNaN(parsedAge) ? 0 : parsedAge,
    programmeInterest: toProgrammeInterest(formData.programme || ""),
    classFormat: toClassFormat(formData.classFormat || ""),
    selectedCourses,
    additionalInfo: formData.additionalInfo.trim(),
  };
}
