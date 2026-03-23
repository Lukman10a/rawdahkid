import type { EnrolTranslate, FormData } from "@/components/enrol/types";

type DetailsSummaryModalProps = {
  t: EnrolTranslate;
  formData: FormData;
  selectedCourses: string[];
  selectedPlanName?: string;
  onFormFieldChange: (name: keyof FormData, value: string) => void;
  onEditFullForm: () => void;
  onContinueToPaymentOptions: () => void;
};

export function DetailsSummaryModal({
  t,
  formData,
  selectedCourses,
  selectedPlanName,
  onFormFieldChange,
  onEditFullForm,
  onContinueToPaymentOptions,
}: DetailsSummaryModalProps) {
  return (
    <div className="text-start">
      <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-8 text-center pb-4 border-b border-light/10">
        Registration Summary
      </h3>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-ivory dark:bg-black/20 p-6 rounded-sm space-y-4 font-sans shadow-inner">
          <div className="flex justify-between items-center gap-4">
            <span className="text-midnight/60 dark:text-cream/60">Parent</span>
            <span className="font-medium text-end">
              {formData.parentName || "-"}
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-midnight/60 dark:text-cream/60">Email</span>
            <span className="font-medium text-end">
              {formData.parentEmail || "-"}
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-midnight/60 dark:text-cream/60">Student</span>
            <span className="font-medium text-end">
              {formData.studentName || "-"}
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-midnight/60 dark:text-cream/60">
              Selected package
            </span>
            <span className="font-medium text-end">
              {selectedPlanName || "Not selected from fees"}
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-midnight/60 dark:text-cream/60">Courses</span>
            <span className="font-medium text-end">
              {selectedCourses.length > 0
                ? `${selectedCourses.length} selected`
                : "-"}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-2">
              Programme
            </label>
            <select
              name="programme"
              value={formData.programme}
              onChange={(e) => onFormFieldChange("programme", e.target.value)}
              className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-midnight rounded-sm"
            >
              <option value="dual">{t("form.student.progDual")}</option>
              <option value="islamic">{t("form.student.progIslamic")}</option>
              <option value="western">{t("form.student.progWestern")}</option>
              <option value="individual">
                {t("form.student.progIndividual")}
              </option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-2">
              Class format
            </label>
            <select
              name="classFormat"
              value={formData.classFormat}
              onChange={(e) => onFormFieldChange("classFormat", e.target.value)}
              className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-midnight rounded-sm"
            >
              <option value="group">{t("form.student.formatGroup")}</option>
              <option value="one-on-one">
                {t("form.student.formatOneOnOne")}
              </option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <button
              onClick={onEditFullForm}
              className="w-full py-3 text-sm text-midnight/60 hover:text-midnight dark:text-cream/60 dark:hover:text-cream uppercase tracking-wider border border-midnight/10 dark:border-white/10"
            >
              Edit Full Form
            </button>
            <button
              onClick={onContinueToPaymentOptions}
              className="w-full bg-midnight dark:bg-cream text-white dark:text-midnight py-3 font-bold uppercase tracking-widest hover:opacity-90"
            >
              Continue to Payment Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
