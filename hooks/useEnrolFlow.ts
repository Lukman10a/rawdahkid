import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { PaymentConfig, Plan } from "@/components/fees/types";
import {
  calculatePaymentTotals,
  getCurrentUserEmail,
  getDraft,
  getRecordByEmail,
  normalizeEmail,
  saveDraft,
  saveRegisteredEmail,
  setCurrentUserEmail,
  upsertRecord,
} from "@/lib/enrolmentStorage";
import type {
  EnrolModalState,
  FormData,
  FormErrors,
} from "@/components/enrol/types";

export function useEnrolFlow() {
  const searchParams = useSearchParams();

  const draft = getDraft();
  const shouldResumePayment = searchParams.get("resume") === "payment";
  const currentUserEmail = getCurrentUserEmail();
  const resumeRecord = shouldResumePayment
    ? getRecordByEmail(currentUserEmail)
    : null;
  const initialRecord =
    resumeRecord &&
    resumeRecord.registrationCompleted &&
    !resumeRecord.paymentCompleted
      ? resumeRecord
      : null;

  const [formData, setFormData] = useState<FormData>(
    () => initialRecord?.formData || draft.formData,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedCourses, setSelectedCourses] = useState<string[]>(
    () => initialRecord?.selectedCourses || draft.selectedCourses,
  );
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(
    () => initialRecord?.selectedPlan || draft.selectedPlan,
  );
  const [paymentConfig, setPaymentConfig] = useState<PaymentConfig>(
    () => initialRecord?.paymentConfig || draft.paymentConfig,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<EnrolModalState>(
    initialRecord ? "details_summary" : "idle",
  );
  const [failureReason, setFailureReason] = useState("");
  const [existingEmailForResume, setExistingEmailForResume] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-focus modal
  useEffect(() => {
    if (modalState !== "idle" && modalRef.current) {
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    }
  }, [modalState]);

  // Auto-save draft
  useEffect(() => {
    saveDraft({
      formData,
      selectedCourses,
      selectedPlan,
      paymentConfig,
    });
  }, [formData, selectedCourses, selectedPlan, paymentConfig]);

  const updateFormField = (name: keyof FormData, value: string) => {
    if (name === "programme" && value !== "individual") {
      setSelectedCourses([]);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    updateFormField(e.target.name as keyof FormData, e.target.value);
  };

  const handlePhoneChange = (value: string) => {
    const sanitized = value.replace(/[^0-9\s-]/g, "");
    updateFormField("parentPhone", sanitized);
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((current) => current !== course)
        : [...prev, course],
    );
  };

  const validateForm = (tText: (key: string) => string) => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.parentName.trim()) {
      newErrors.parentName = tText("form.errors.required");
    }
    if (!formData.parentEmail.trim()) {
      newErrors.parentEmail = tText("form.errors.required");
    } else if (!emailRegex.test(formData.parentEmail)) {
      newErrors.parentEmail = tText("form.errors.invalidEmail");
    }
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = tText("form.errors.required");
    } else if (!/^[\d\s-]*$/.test(formData.parentPhone)) {
      newErrors.parentPhone = tText("form.errors.phoneInvalid");
    }
    if (!formData.studentName.trim()) {
      newErrors.studentName = tText("form.errors.required");
    }
    if (!formData.studentAge.trim()) {
      newErrors.studentAge = tText("form.errors.required");
    }
    if (!formData.programme) {
      newErrors.programme = tText("form.errors.required");
    }
    if (!formData.classFormat) {
      newErrors.classFormat = tText("form.errors.required");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const upsertCurrentRecord = (paymentCompleted = false) => {
    const normalizedEmail = normalizeEmail(formData.parentEmail);
    if (!normalizedEmail) return;

    upsertRecord({
      email: normalizedEmail,
      formData,
      selectedCourses,
      selectedPlan,
      paymentConfig,
      registrationCompleted: true,
      paymentCompleted,
      updatedAt: new Date().toISOString(),
    });
    setCurrentUserEmail(normalizedEmail);
  };

  const handleSubmit = (e: React.FormEvent, tText: (key: string) => string) => {
    e.preventDefault();
    if (!validateForm(tText)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const normalizedEmail = normalizeEmail(formData.parentEmail);
      const existingRecord = getRecordByEmail(normalizedEmail);

      if (
        existingRecord?.registrationCompleted &&
        existingRecord.paymentCompleted
      ) {
        setIsSubmitting(false);
        setFailureReason(tText("form.errors.emailExists"));
        setExistingEmailForResume(normalizedEmail);
        setModalState("failure");
        return;
      }

      saveRegisteredEmail(normalizedEmail);
      setCurrentUserEmail(normalizedEmail);

      upsertRecord({
        email: normalizedEmail,
        formData,
        selectedCourses,
        selectedPlan,
        paymentConfig,
        registrationCompleted: true,
        paymentCompleted: existingRecord?.paymentCompleted || false,
        updatedAt: new Date().toISOString(),
      });

      setIsSubmitting(false);
      setModalState("success");
    }, 1500);
  };

  const totals = calculatePaymentTotals(selectedPlan, paymentConfig);

  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.parentName &&
    formData.parentEmail &&
    formData.parentPhone &&
    formData.studentName &&
    formData.studentAge &&
    formData.programme &&
    formData.classFormat;

  return {
    // State
    formData,
    errors,
    selectedCourses,
    selectedPlan,
    paymentConfig,
    isSubmitting,
    modalState,
    failureReason,
    existingEmailForResume,
    isFormValid,
    totals,
    modalRef,

    // Setters
    setFormData,
    setErrors,
    setSelectedCourses,
    setSelectedPlan,
    setPaymentConfig,
    setIsSubmitting,
    setModalState,
    setFailureReason,
    setExistingEmailForResume,

    // Handlers
    handleSubmit,
    handleInputChange,
    handlePhoneChange,
    toggleCourse,
    updateFormField,
    upsertCurrentRecord,

    // Utilities
    validateForm,
  };
}
