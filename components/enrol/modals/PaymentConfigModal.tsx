import type { PaymentConfig } from "@/components/fees/types";
import type { EnrolTotals, EnrolTranslate } from "@/components/enrol/types";

type PaymentConfigModalProps = {
  t: EnrolTranslate;
  selectedPlanName: string;
  paymentConfig: PaymentConfig;
  totals: EnrolTotals;
  onSetPaymentFrequency: (frequency: PaymentConfig["frequency"]) => void;
  onDecreaseStudents: () => void;
  onIncreaseStudents: () => void;
  onGoToPaymentOverview: () => void;
};

export function PaymentConfigModal({
  t,
  selectedPlanName,
  paymentConfig,
  totals,
  onSetPaymentFrequency,
  onDecreaseStudents,
  onIncreaseStudents,
  onGoToPaymentOverview,
}: PaymentConfigModalProps) {
  return (
    <div className="text-start">
      <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-2 text-center">
        {t("Modals.paymentConfig.title")}
      </h3>
      <p className="text-center font-sans text-base lg:text-lg text-midnight/60 dark:text-cream/60 mb-8">
        {selectedPlanName}
      </p>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-4 border-b border-light/10 pb-2">
            {t("Modals.paymentConfig.modeLabel")}
          </label>
          <div className="grid grid-cols-1 gap-3">
            {(["annual", "semester", "monthly"] as const).map((freq) => (
              <label
                key={freq}
                className={`flex items-center justify-between border p-3 rounded-sm cursor-pointer transition-all ${
                  paymentConfig.frequency === freq
                    ? "border-gold bg-gold/5"
                    : "border-midnight/10 dark:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="freq"
                    checked={paymentConfig.frequency === freq}
                    onChange={() => onSetPaymentFrequency(freq)}
                    className="accent-gold"
                  />
                  <span className="font-sans text-sm font-medium">
                    {t(`Modals.paymentConfig.modes.${freq}`)}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-4 border-b border-light/10 pb-2">
            {t("Modals.paymentConfig.childrenLabel")}
          </label>
          <div className="flex items-center gap-6 justify-center md:justify-start">
            <button
              onClick={onDecreaseStudents}
              className="w-12 h-12 border border-midnight/20 hover:border-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all text-xl"
            >
              -
            </button>
            <span className="font-cormorant text-4xl w-12 text-center">
              {paymentConfig.students}
            </span>
            <button
              onClick={onIncreaseStudents}
              className="w-12 h-12 border border-midnight/20 hover:border-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all text-xl"
            >
              +
            </button>
          </div>
          <div className="bg-ivory dark:bg-black/20 p-6 rounded-sm mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-midnight/60 dark:text-cream/60">
                Estimated Total
              </span>
              <span className="font-cormorant text-2xl font-bold text-gold">
                ${totals.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <button
          onClick={onGoToPaymentOverview}
          className="w-full md:w-auto px-12 bg-midnight dark:bg-cream text-white dark:text-midnight py-4 font-bold uppercase tracking-widest hover:opacity-90 shadow-lg hover:-translate-y-0.5 transition-all"
        >
          {t("Modals.paymentConfig.next")}
        </button>
      </div>
    </div>
  );
}
