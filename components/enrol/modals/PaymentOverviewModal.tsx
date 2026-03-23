import { CreditCard } from "lucide-react";
import type { PaymentConfig } from "@/components/fees/types";
import type { EnrolTotals, EnrolTranslate } from "@/components/enrol/types";

type PaymentOverviewModalProps = {
  t: EnrolTranslate;
  selectedPlanName: string;
  paymentConfig: PaymentConfig;
  totals: EnrolTotals;
  onFinalizePayment: () => void;
  onBackToPaymentConfig: () => void;
  isFinalizingPayment: boolean;
};

export function PaymentOverviewModal({
  t,
  selectedPlanName,
  paymentConfig,
  totals,
  onFinalizePayment,
  onBackToPaymentConfig,
  isFinalizingPayment,
}: PaymentOverviewModalProps) {
  return (
    <div className="text-start">
      <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-8 text-center pb-4 border-b border-light/10">
        {t("Modals.overview.title")}
      </h3>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-ivory dark:bg-black/20 p-8 rounded-sm space-y-4 font-sans shadow-inner">
          <div className="flex justify-between items-center">
            <span className="text-midnight/60 dark:text-cream/60">
              {t("Modals.overview.plan")}
            </span>
            <span className="font-medium text-end text-lg">
              {selectedPlanName}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-midnight/60 dark:text-cream/60 text-sm italic">
              Billing Frequency
            </span>
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
              {paymentConfig.frequency}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-midnight/60 dark:text-cream/60">
              {t("Modals.overview.students")}
            </span>
            <span className="font-medium text-lg">
              {paymentConfig.students}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-midnight/60 dark:text-cream/60">
              {t("Modals.overview.discount")}
            </span>
            <span className="font-medium text-green-600">
              -{totals.discount}
            </span>
          </div>
          <div className="border-t border-midnight/10 dark:border-white/10 pt-4 flex justify-between items-center mt-4">
            <span className="font-bold text-midnight dark:text-cream uppercase tracking-wider text-lg">
              {t("Modals.overview.total")}
            </span>
            <span className="font-cormorant text-4xl font-bold text-gold">
              ${totals.total.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onFinalizePayment}
            disabled={isFinalizingPayment}
            className="w-full bg-gold text-midnight py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-xl flex items-center justify-center gap-3 text-lg group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <CreditCard
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            {isFinalizingPayment
              ? "Processing..."
              : t("Modals.overview.proceed")}
          </button>
          <button
            onClick={onBackToPaymentConfig}
            className="w-full py-3 text-sm text-midnight/50 hover:text-midnight dark:text-cream/50 dark:hover:text-cream uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            ← {t("Modals.overview.cancel")}
          </button>
        </div>
      </div>
    </div>
  );
}
