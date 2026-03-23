import { AlertTriangle } from "lucide-react";
import type {
  EnrolTranslate,
  FormData,
  FormErrors,
} from "@/components/enrol/types";
import { countries } from "@/lib/countries";

type ParentDetailsSectionProps = {
  t: EnrolTranslate;
  formData: FormData;
  errors: FormErrors;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  onPhoneChange: (value: string) => void;
};

export function ParentDetailsSection({
  t,
  formData,
  errors,
  onInputChange,
  onPhoneChange,
}: ParentDetailsSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-cinzel text-lg text-gold border-b border-gold/20 pb-2">
        {t("form.parent.title")}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.parent.name")} *
          </label>
          <input
            name="parentName"
            type="text"
            value={formData.parentName}
            onChange={onInputChange}
            className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${
              errors.parentName
                ? "border-red-500 ring-1 ring-red-500"
                : "border-midnight/10 dark:border-white/10 focus:border-gold"
            }`}
            placeholder={t("form.parent.namePlaceholder")}
          />
          {errors.parentName && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.parentName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.parent.email")} *
          </label>
          <input
            name="parentEmail"
            type="email"
            value={formData.parentEmail}
            onChange={onInputChange}
            className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${
              errors.parentEmail
                ? "border-red-500 ring-1 ring-red-500"
                : "border-midnight/10 dark:border-white/10 focus:border-gold"
            }`}
            placeholder={t("form.parent.emailPlaceholder")}
          />
          {errors.parentEmail && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.parentEmail}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.parent.phone")} *
          </label>
          <div className="flex gap-2">
            <select
              name="parentCountry"
              value={formData.parentCountry}
              onChange={onInputChange}
              className="w-30 border px-2 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans text-sm border-midnight/10 dark:border-white/10"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.dialCode})
                </option>
              ))}
            </select>
            <input
              name="parentPhone"
              type="tel"
              value={formData.parentPhone}
              onChange={(e) => onPhoneChange(e.target.value)}
              className={`flex-1 border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${
                errors.parentPhone
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-midnight/10 dark:border-white/10 focus:border-gold"
              }`}
              placeholder="123 456 7890"
            />
          </div>
          {errors.parentPhone && (
            <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
              <AlertTriangle size={12} /> {errors.parentPhone}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
            {t("form.parent.city")}
          </label>
          <input
            name="parentCity"
            type="text"
            value={formData.parentCity}
            onChange={onInputChange}
            className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
            placeholder={t("form.parent.cityPlaceholder")}
          />
        </div>
      </div>
    </div>
  );
}
