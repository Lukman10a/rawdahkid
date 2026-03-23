import { AlertTriangle } from "lucide-react";
import type {
  EnrolTranslate,
  FormData,
  FormErrors,
} from "@/components/enrol/types";

type StudentDetailsSectionProps = {
  t: EnrolTranslate;
  formData: FormData;
  errors: FormErrors;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
};

export function StudentDetailsSection({
  t,
  formData,
  errors,
  onInputChange,
}: StudentDetailsSectionProps) {
  return (
    <div className="space-y-6 pt-4">
      <h3 className="font-cinzel text-lg text-gold border-b border-gold/20 pb-2">
        {t("form.student.title")}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.student.name")} *
          </label>
          <input
            name="studentName"
            type="text"
            value={formData.studentName}
            onChange={onInputChange}
            className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${
              errors.studentName
                ? "border-red-500 ring-1 ring-red-500"
                : "border-midnight/10 dark:border-white/10 focus:border-gold"
            }`}
            placeholder={t("form.student.namePlaceholder")}
          />
          {errors.studentName && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.studentName}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.student.age")} *
          </label>
          <input
            name="studentAge"
            type="number"
            min="4"
            max="18"
            value={formData.studentAge}
            onChange={onInputChange}
            className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${
              errors.studentAge
                ? "border-red-500 ring-1 ring-red-500"
                : "border-midnight/10 dark:border-white/10 focus:border-gold"
            }`}
            placeholder={t("form.student.agePlaceholder")}
          />
          {errors.studentAge && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.studentAge}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.student.programme")} *
          </label>
          <div className="relative">
            <select
              name="programme"
              value={formData.programme}
              onChange={onInputChange}
              className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans appearance-none cursor-pointer ${
                errors.programme
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-midnight/10 dark:border-white/10 focus:border-gold"
              }`}
            >
              <option value="" disabled>
                {t("form.student.programmeSelect")}
              </option>
              <option value="dual">{t("form.student.progDual")}</option>
              <option value="islamic">{t("form.student.progIslamic")}</option>
              <option value="western">{t("form.student.progWestern")}</option>
              <option value="individual">
                {t("form.student.progIndividual")}
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.programme && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.programme}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.student.format")} *
          </label>
          <div className="relative">
            <select
              name="classFormat"
              value={formData.classFormat}
              onChange={onInputChange}
              className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans appearance-none cursor-pointer ${
                errors.classFormat
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-midnight/10 dark:border-white/10 focus:border-gold"
              }`}
            >
              <option value="" disabled>
                {t("form.student.formatSelect")}
              </option>
              <option value="group">{t("form.student.formatGroup")}</option>
              <option value="one-on-one">
                {t("form.student.formatOneOnOne")}
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.classFormat && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.classFormat}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
