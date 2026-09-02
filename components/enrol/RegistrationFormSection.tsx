"use client";

import { Loader2, Calendar } from "lucide-react";
import type {
  EnrolTranslate,
  FormData,
  FormErrors,
} from "@/components/enrol/types";
import { ParentDetailsSection } from "./sections/ParentDetailsSection";
import { StudentDetailsSection } from "./sections/StudentDetailsSection";
import { CourseSelectionSection } from "./sections/CourseSelectionSection";

type RegistrationFormSectionProps = {
  t: EnrolTranslate;
  formData: FormData;
  errors: FormErrors;
  selectedCourses: string[];
  isSubmitting: boolean;
  isFormValid: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  onPhoneChange: (value: string) => void;
  onToggleCourse: (course: string) => void;
};

export function RegistrationFormSection({
  t,
  formData,
  errors,
  selectedCourses,
  isSubmitting,
  isFormValid,
  onSubmit,
  onInputChange,
  onPhoneChange,
  onToggleCourse,
}: RegistrationFormSectionProps) {
  return (
    <section
      className="py-24 bg-warm dark:bg-[#12221b] border-t border-gold/10 relative"
      id="registration-form"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-navy p-10 md:p-14 shadow-2xl rounded-sm border-t-4 border-t-gold border-x border-b border-midnight/5 dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="text-center mb-6 relative z-10">
            <h2 className="font-playfair text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              {t("form.title")}
            </h2>
            <p className="font-sans text-midnight/70 dark:text-cream/70 mb-4">
              {t("form.desc")}
            </p>
            <div className="flex flex-col items-center gap-2 py-4 border-y border-gold/20 bg-gold/5 rounded-sm">
              <p className="font-sans text-sm text-midnight/70 dark:text-cream/70">
                Prefer to talk to a human? We&apos;d love to help.
              </p>
              <a
                href="https://calendly.com/markazulbayaan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-midnight px-6 py-2 rounded-sm text-sm font-medium tracking-wide hover:bg-amber hover:scale-105 transition-all duration-300 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Consultation Call
              </a>
            </div>
          </div>

          <form
            className="space-y-8 relative z-10"
            onSubmit={onSubmit}
            noValidate
          >
            <ParentDetailsSection
              t={t}
              formData={formData}
              errors={errors}
              onInputChange={onInputChange}
              onPhoneChange={onPhoneChange}
            />

            <StudentDetailsSection
              t={t}
              formData={formData}
              errors={errors}
              onInputChange={onInputChange}
            />

            {formData.programme === "individual" && (
              <CourseSelectionSection
                t={t}
                selectedCourses={selectedCourses}
                onToggleCourse={onToggleCourse}
              />
            )}

            <div className="space-y-2">
              <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                {t("form.student.additional")}
              </label>
              <textarea
                name="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={onInputChange}
                className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans resize-none"
                placeholder={t("form.student.additionalPlaceholder")}
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                disabled={isSubmitting || (!isFormValid && false)}
                className={`w-full py-4 rounded-sm font-sans font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-lg flex items-center justify-center ${
                  isSubmitting
                    ? "bg-midnight/10 text-midnight/40 dark:bg-white/10 dark:text-white/40 cursor-not-allowed"
                    : "bg-gold text-midnight hover:bg-white hover:text-gold border border-transparent hover:border-gold hover:shadow-gold/20"
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                ) : (
                  t("form.submit")
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
