import { AlertTriangle } from "lucide-react";
import type { EnrolTranslate } from "@/components/enrol/types";

type FailureModalProps = {
  t: EnrolTranslate;
  failureReason: string;
  onContinueExistingEnrollment: () => void;
  onRetryClose: () => void;
};

export function FailureModal({
  t,
  failureReason,
  onContinueExistingEnrollment,
  onRetryClose,
}: FailureModalProps) {
  const isEmailExistsError = failureReason === t("form.errors.emailExists");

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
        <AlertTriangle size={40} />
      </div>
      <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
        {t("Modals.failure.title")}
      </h3>
      <p className="font-sans text-red-500 mb-8 font-medium">{failureReason}</p>
      {isEmailExistsError ? (
        <div className="w-full space-y-3">
          <button
            onClick={onContinueExistingEnrollment}
            className="w-full bg-midnight dark:bg-cream text-white dark:text-midnight py-3 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Continue Existing Enrollment
          </button>
          <button
            onClick={onRetryClose}
            className="w-full border border-midnight/10 dark:border-white/10 py-3 text-sm text-midnight/60 dark:text-cream/60 hover:text-midnight dark:hover:text-cream uppercase tracking-wider"
          >
            Close
          </button>
        </div>
      ) : (
        <button
          onClick={onRetryClose}
          className="w-full bg-midnight dark:bg-white text-white dark:text-midnight py-3 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          {t("Modals.failure.retry")}
        </button>
      )}
    </div>
  );
}
