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
import { toApiError } from "@/lib/api/http";
import { mapFormDataToRegisterPayload } from "@/lib/api/registration";
import { getPaymentRedirectUrl } from "@/lib/api/payment";
import { useRegisterStudentMutation } from "@/hooks/api/useRegisterStudentMutation";
import { useInitializePaymentMutation } from "@/hooks/api/useInitializePaymentMutation";
import type {
  EnrolModalState,
  FormData,
  FormErrors,
} from "@/components/enrol/types";

export function useEnrolFlow() {
  const searchParams = useSearchParams();
  const registerStudentMutation = useRegisterStudentMutation();
  const initializePaymentMutation = useInitializePaymentMutation();

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
  const [isInitializingPayment, setIsInitializingPayment] = useState(false);
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
    } else if (formData.classFormat === "one-on-one") {
      newErrors.classFormat =
        "One-on-One class is currently unavailable for online registration. Please select Group Class or contact support.";
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

  const handleSubmit = async (
    e: React.FormEvent,
    tText: (key: string) => string,
  ) => {
    e.preventDefault();
    if (!validateForm(tText)) return;

    setIsSubmitting(true);

    try {
      const payload = mapFormDataToRegisterPayload(formData, selectedCourses);
      const response = await registerStudentMutation.mutateAsync(payload);

      if (!response.success) {
        throw new Error(response.message || "Registration failed. Please try again.");
      }

      const normalizedEmail = normalizeEmail(formData.parentEmail);
      const existingRecord = getRecordByEmail(normalizedEmail);

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

      setModalState("success");
    } catch (error) {
      const apiError = toApiError(error);
      const message = apiError.message || "Registration failed. Please try again.";
      const isDuplicateEmail = /already|exist|duplicate/i.test(message);

      if (isDuplicateEmail) {
        const normalizedEmail = normalizeEmail(formData.parentEmail);
        setFailureReason(tText("form.errors.emailExists"));
        setExistingEmailForResume(normalizedEmail);
      } else {
        setFailureReason(message);
      }

      setModalState("failure");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalizePayment = async () => {
    if (isInitializingPayment) return;

    const email = normalizeEmail(formData.parentEmail);
    const amount = Math.max(0, Math.round(totals.total));

    if (!email) {
      setFailureReason("Please provide a valid email before payment.");
      setModalState("failure");
      return;
    }

    if (amount <= 0) {
      setFailureReason("Payment amount is invalid. Please review your selection.");
      setModalState("failure");
      return;
    }

    setIsInitializingPayment(true);

    try {
      const response = await initializePaymentMutation.mutateAsync({
        email,
        amount,
      });

      if (!response.success) {
        throw new Error(response.message || "Unable to initialize payment.");
      }

      upsertCurrentRecord(true);

      const redirectUrl = getPaymentRedirectUrl(response.data);
      if (redirectUrl && typeof window !== "undefined") {
        window.location.assign(redirectUrl);
        return;
      }

      if (response.message) {
        alert(response.message);
      }
    } catch (error) {
      const apiError = toApiError(error);
      setFailureReason(apiError.message || "Unable to initialize payment.");
      setModalState("failure");
    } finally {
      setIsInitializingPayment(false);
    }
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
    isInitializingPayment,
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
    setIsInitializingPayment,
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
    handleFinalizePayment,

    // Utilities
    validateForm,
  };
}
