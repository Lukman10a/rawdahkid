"use client";

import { useTranslations } from "next-intl";
import { useEnrolFlow } from "@/hooks/useEnrolFlow";
import { getRecordByEmail } from "@/lib/enrolmentStorage";
import { AdmissionsProcessSection } from "@/components/enrol/AdmissionsProcessSection";
import { RegistrationFormSection } from "@/components/enrol/RegistrationFormSection";
import { EnrolmentModals } from "@/components/enrol/EnrolmentModals";

export default function EnrolPage() {
  const t = useTranslations("Enrol");
  const tText = (key: string) => t(key as never);

  const flow = useEnrolFlow();

  const handleSubmit = (e: React.FormEvent) => {
    flow.handleSubmit(e, tText);
  };

  const handleContinueExisting = () => {
    const record = getRecordByEmail(flow.existingEmailForResume);
    if (!record) {
      flow.setModalState("idle");
      return;
    }

    flow.setFormData(record.formData);
    flow.setSelectedCourses(record.selectedCourses || []);
    flow.setSelectedPlan(record.selectedPlan || null);
    flow.setPaymentConfig(
      record.paymentConfig || { frequency: "annual", students: 1 },
    );
    flow.setModalState("details_summary");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 relative">
      <AdmissionsProcessSection t={tText} tUnsafe={tText} />

      <RegistrationFormSection
        t={tText}
        formData={flow.formData}
        errors={flow.errors}
        selectedCourses={flow.selectedCourses}
        isSubmitting={flow.isSubmitting}
        isFormValid={Boolean(flow.isFormValid)}
        onSubmit={handleSubmit}
        onInputChange={flow.handleInputChange}
        onPhoneChange={flow.handlePhoneChange}
        onToggleCourse={flow.toggleCourse}
      />

      <EnrolmentModals
        modalState={flow.modalState}
        modalRef={flow.modalRef}
        t={tText}
        failureReason={flow.failureReason}
        formData={flow.formData}
        selectedCourses={flow.selectedCourses}
        selectedPlanName={flow.selectedPlan?.name}
        paymentConfig={flow.paymentConfig}
        totals={flow.totals}
        isFinalizingPayment={flow.isInitializingPayment}
        onClose={() => flow.setModalState("idle")}
        onProceedToPayment={() => {
          flow.upsertCurrentRecord(false);
          flow.setModalState("details_summary");
        }}
        onContinueExistingEnrollment={handleContinueExisting}
        onRetryClose={() => flow.setModalState("idle")}
        onFormFieldChange={flow.updateFormField}
        onSummaryEditFullForm={() => {
          flow.setModalState("idle");
          document
            .getElementById("registration-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        onSummaryContinueToPaymentOptions={() => {
          flow.upsertCurrentRecord(false);
          flow.setModalState("payment_config");
        }}
        onBackFromDetailsSummary={() => flow.setModalState("success")}
        onBackToDetailsSummary={() => flow.setModalState("details_summary")}
        onSetPaymentFrequency={(frequency) =>
          flow.setPaymentConfig((prev) => ({
            ...prev,
            frequency,
          }))
        }
        onDecreaseStudents={() =>
          flow.setPaymentConfig((prev) => ({
            ...prev,
            students: Math.max(1, prev.students - 1),
          }))
        }
        onIncreaseStudents={() =>
          flow.setPaymentConfig((prev) => ({
            ...prev,
            students: Math.min(10, prev.students + 1),
          }))
        }
        onGoToPaymentOverview={() => flow.setModalState("payment_overview")}
        onBackToPaymentConfig={() => flow.setModalState("payment_config")}
        onFinalizePayment={flow.handleFinalizePayment}
      />
    </div>
  );
}
