import { CheckCircle } from "lucide-react";
import type { EnrolTranslate } from "@/components/enrol/types";

type SuccessModalProps = {
  t: EnrolTranslate;
  onProceedToPayment: () => void;
};

export function SuccessModal({ t, onProceedToPayment }: SuccessModalProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
        <CheckCircle size={40} />
      </div>
      <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
        {t("Modals.success.title")}
      </h3>
      <p className="font-sans text-midnight/70 dark:text-cream/70 mb-8">
        {t("Modals.success.desc")}
      </p>
      <button
        onClick={onProceedToPayment}
        className="btn-primary w-full bg-gold text-midnight py-3 font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors inline-block leading-12"
      >
        {t("Modals.success.proceed")}
      </button>
    </div>
  );
}
