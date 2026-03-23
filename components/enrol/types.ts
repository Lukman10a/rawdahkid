import type { PaymentConfig, Plan } from "@/components/fees/types";

export type FormData = {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentCity: string;
  parentCountry: string;
  studentName: string;
  studentAge: string;
  programme: string;
  classFormat: string;
  additionalInfo: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

export type EnrolModalState =
  | "idle"
  | "success"
  | "failure"
  | "details_summary"
  | "payment_config"
  | "payment_overview";

export type EnrolTotals = {
  total: number;
  discount: string;
};

export type EnrolTranslate = (key: string) => string;

export type EnrolModalCommonProps = {
  formData: FormData;
  selectedCourses: string[];
  selectedPlan: Plan | null;
  paymentConfig: PaymentConfig;
};
