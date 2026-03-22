import type { PaymentConfig, Plan } from "@/components/fees/types";

export type EnrolFormData = {
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

export type EnrolmentDraft = {
  formData: EnrolFormData;
  selectedCourses: string[];
  selectedPlan: Plan | null;
  paymentConfig: PaymentConfig;
};

export type EnrolmentRecord = {
  email: string;
  formData: EnrolFormData;
  selectedCourses: string[];
  selectedPlan: Plan | null;
  paymentConfig: PaymentConfig;
  registrationCompleted: boolean;
  paymentCompleted: boolean;
  updatedAt: string;
};

const DRAFT_KEY = "enrolmentDraft";
const RECORDS_KEY = "enrolmentRecords";
const REGISTERED_EMAILS_KEY = "registeredEmails";
const CURRENT_USER_KEY = "currentUserEmail";

const defaultFormData: EnrolFormData = {
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  parentCity: "",
  parentCountry: "GB",
  studentName: "",
  studentAge: "",
  programme: "",
  classFormat: "",
  additionalInfo: "",
};

export const defaultPaymentConfig: PaymentConfig = {
  frequency: "monthly",
  students: 1,
};

export const defaultEnrolmentDraft: EnrolmentDraft = {
  formData: defaultFormData,
  selectedCourses: [],
  selectedPlan: null,
  paymentConfig: defaultPaymentConfig,
};

function canUseStorage() {
  return typeof window !== "undefined";
}

function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function mapPlanToDefaults(plan: Plan): Partial<EnrolFormData> {
  const programme = plan.id.startsWith("islamic")
    ? "islamic"
    : plan.id.startsWith("western")
      ? "western"
      : plan.id.startsWith("dual")
        ? "dual"
        : "";

  return {
    programme,
    classFormat: plan.type,
  };
}

export function getRegisteredEmails(): string[] {
  if (!canUseStorage()) return [];
  return safeJsonParse<string[]>(
    localStorage.getItem(REGISTERED_EMAILS_KEY),
    [],
  );
}

export function saveRegisteredEmail(email: string) {
  if (!canUseStorage()) return;
  const normalized = normalizeEmail(email);
  if (!normalized) return;

  const emails = getRegisteredEmails();
  if (!emails.includes(normalized)) {
    localStorage.setItem(REGISTERED_EMAILS_KEY, JSON.stringify([...emails, normalized]));
  }
}

export function setCurrentUserEmail(email: string) {
  if (!canUseStorage()) return;
  localStorage.setItem(CURRENT_USER_KEY, normalizeEmail(email));
}

export function getCurrentUserEmail() {
  if (!canUseStorage()) return "";
  return localStorage.getItem(CURRENT_USER_KEY) || "";
}

export function getDraft(): EnrolmentDraft {
  if (!canUseStorage()) return defaultEnrolmentDraft;
  const draft = safeJsonParse<Partial<EnrolmentDraft>>(
    localStorage.getItem(DRAFT_KEY),
    {},
  );

  return {
    formData: {
      ...defaultFormData,
      ...(draft.formData || {}),
    },
    selectedCourses: Array.isArray(draft.selectedCourses)
      ? draft.selectedCourses
      : [],
    selectedPlan: draft.selectedPlan || null,
    paymentConfig: {
      ...defaultPaymentConfig,
      ...(draft.paymentConfig || {}),
    },
  };
}

export function saveDraft(draft: EnrolmentDraft) {
  if (!canUseStorage()) return;
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

export function clearDraft() {
  if (!canUseStorage()) return;
  localStorage.removeItem(DRAFT_KEY);
}

export function saveSelectedPlanInDraft(plan: Plan) {
  if (!canUseStorage()) return;
  const draft = getDraft();
  const defaults = mapPlanToDefaults(plan);

  saveDraft({
    ...draft,
    selectedPlan: plan,
    formData: {
      ...draft.formData,
      ...defaults,
    },
  });
}

export function getRecords(): Record<string, EnrolmentRecord> {
  if (!canUseStorage()) return {};
  return safeJsonParse<Record<string, EnrolmentRecord>>(
    localStorage.getItem(RECORDS_KEY),
    {},
  );
}

export function getRecordByEmail(email: string): EnrolmentRecord | null {
  const normalized = normalizeEmail(email);
  if (!normalized) return null;
  const records = getRecords();
  return records[normalized] || null;
}

export function upsertRecord(record: EnrolmentRecord) {
  if (!canUseStorage()) return;
  const normalized = normalizeEmail(record.email);
  if (!normalized) return;

  const records = getRecords();
  records[normalized] = {
    ...record,
    email: normalized,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

export function calculatePaymentTotals(plan: Plan | null, config: PaymentConfig) {
  if (!plan) return { total: 0, discount: "0%" };

  const base = plan.price;
  let amountDue = 0;

  if (config.frequency === "annual") {
    amountDue = base * config.students;
  } else if (config.frequency === "semester") {
    amountDue = (base / 2) * config.students;
  } else {
    amountDue = (base / 12) * config.students;
  }

  return {
    total: Math.round(amountDue),
    discount: "0%",
  };
}
