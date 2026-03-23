"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useEffect } from "react";
import type { PaymentConfig } from "@/components/fees/types";
import type {
  EnrolModalState,
  EnrolTotals,
  EnrolTranslate,
  FormData,
} from "@/components/enrol/types";
import { SuccessModal } from "./modals/SuccessModal";
import { FailureModal } from "./modals/FailureModal";
import { DetailsSummaryModal } from "./modals/DetailsSummaryModal";
import { PaymentConfigModal } from "./modals/PaymentConfigModal";
import { PaymentOverviewModal } from "./modals/PaymentOverviewModal";

type EnrolmentModalsProps = {
  modalState: EnrolModalState;
  modalRef: React.RefObject<HTMLDivElement | null>;
  t: EnrolTranslate;
  failureReason: string;
  formData: FormData;
  selectedCourses: string[];
  selectedPlanName?: string;
  paymentConfig: PaymentConfig;
  totals: EnrolTotals;
  isFinalizingPayment: boolean;
  onClose: () => void;
  onProceedToPayment: () => void;
  onContinueExistingEnrollment: () => void;
  onRetryClose: () => void;
  onFormFieldChange: (name: keyof FormData, value: string) => void;
  onSummaryEditFullForm: () => void;
  onSummaryContinueToPaymentOptions: () => void;
  onBackFromDetailsSummary: () => void;
  onBackToDetailsSummary: () => void;
  onSetPaymentFrequency: (frequency: PaymentConfig["frequency"]) => void;
  onDecreaseStudents: () => void;
  onIncreaseStudents: () => void;
  onGoToPaymentOverview: () => void;
  onBackToPaymentConfig: () => void;
  onFinalizePayment: () => void;
};

export function EnrolmentModals({
  modalState,
  modalRef,
  t,
  failureReason,
  formData,
  selectedCourses,
  selectedPlanName,
  paymentConfig,
  totals,
  isFinalizingPayment,
  onClose,
  onProceedToPayment,
  onContinueExistingEnrollment,
  onRetryClose,
  onFormFieldChange,
  onSummaryEditFullForm,
  onSummaryContinueToPaymentOptions,
  onBackFromDetailsSummary,
  onBackToDetailsSummary,
  onSetPaymentFrequency,
  onDecreaseStudents,
  onIncreaseStudents,
  onGoToPaymentOverview,
  onBackToPaymentConfig,
  onFinalizePayment,
}: EnrolmentModalsProps) {
  useEffect(() => {
    if (modalState === "idle") return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [modalState]);

  const getModalWidth = () => {
    switch (modalState) {
      case "payment_config":
      case "payment_overview":
      case "details_summary":
        return "max-w-3xl";
      default:
        return "max-w-lg";
    }
  };

  const canGoBack =
    modalState === "details_summary" ||
    modalState === "payment_config" ||
    modalState === "payment_overview";

  const handleBack = () => {
    switch (modalState) {
      case "details_summary":
        onBackFromDetailsSummary();
        break;
      case "payment_config":
        onBackToDetailsSummary();
        break;
      case "payment_overview":
        onBackToPaymentConfig();
        break;
      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {modalState !== "idle" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 bg-midnight/80 backdrop-blur-sm outline-none"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={`my-8 max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1a2c42] w-full ${getModalWidth()} p-8 md:p-12 rounded-sm shadow-2xl relative border-t-4 border-gold text-center outline-none`}
            onClick={(e) => e.stopPropagation()}
          >
            {canGoBack && (
              <div className="absolute top-4 left-4">
                <button
                  onClick={handleBack}
                  aria-label="Go back"
                  className="text-midnight/40 hover:text-midnight dark:text-cream/60 dark:hover:text-cream transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
              </div>
            )}

            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="text-midnight/40 hover:text-midnight dark:text-cream/60 dark:hover:text-cream transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {modalState === "success" && (
              <SuccessModal t={t} onProceedToPayment={onProceedToPayment} />
            )}

            {modalState === "failure" && (
              <FailureModal
                t={t}
                failureReason={failureReason}
                onContinueExistingEnrollment={onContinueExistingEnrollment}
                onRetryClose={onRetryClose}
              />
            )}

            {modalState === "details_summary" && (
              <DetailsSummaryModal
                t={t}
                formData={formData}
                selectedCourses={selectedCourses}
                selectedPlanName={selectedPlanName}
                onFormFieldChange={onFormFieldChange}
                onEditFullForm={onSummaryEditFullForm}
                onContinueToPaymentOptions={onSummaryContinueToPaymentOptions}
              />
            )}

            {modalState === "payment_config" && selectedPlanName && (
              <PaymentConfigModal
                t={t}
                selectedPlanName={selectedPlanName}
                paymentConfig={paymentConfig}
                totals={totals}
                onSetPaymentFrequency={onSetPaymentFrequency}
                onDecreaseStudents={onDecreaseStudents}
                onIncreaseStudents={onIncreaseStudents}
                onGoToPaymentOverview={onGoToPaymentOverview}
              />
            )}

            {modalState === "payment_overview" && selectedPlanName && (
              <PaymentOverviewModal
                t={t}
                selectedPlanName={selectedPlanName}
                paymentConfig={paymentConfig}
                totals={totals}
                onFinalizePayment={onFinalizePayment}
                onBackToPaymentConfig={onBackToPaymentConfig}
                isFinalizingPayment={isFinalizingPayment}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
