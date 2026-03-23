import { motion } from "framer-motion";
import type { EnrolTranslate } from "@/components/enrol/types";

type CourseSelectionSectionProps = {
  t: EnrolTranslate;
  selectedCourses: string[];
  onToggleCourse: (course: string) => void;
};

const ISLAMIC_COURSES = [
  "form.student.individualCourses.arabic",
  "form.student.individualCourses.quran",
  "form.student.individualCourses.tawheed",
  "form.student.individualCourses.fiqh",
  "form.student.individualCourses.hadith",
  "form.student.individualCourses.mutoon",
];

const WESTERN_COURSES = [
  "form.student.individualCourses.math",
  "form.student.individualCourses.science",
  "form.student.individualCourses.programming",
];

export function CourseSelectionSection({
  t,
  selectedCourses,
  onToggleCourse,
}: CourseSelectionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="p-6 mt-4 border border-gold/30 rounded-sm bg-gold/5 dark:bg-gold/5 space-y-6"
    >
      <div className="text-center md:text-start">
        <h4 className="font-cinzel text-lg text-midnight dark:text-cream tracking-wider mb-1">
          {t("form.student.individualCourses.title")}
        </h4>
        <p className="text-sm font-sans text-midnight/70 dark:text-cream/70">
          {t("form.student.individualCourses.desc")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h5 className="font-sans font-bold text-sm text-amber mb-4 uppercase tracking-wider border-b border-gold/10 pb-2">
            {t("form.student.individualCourses.islamicTitle")}
          </h5>
          <div className="space-y-3">
            {ISLAMIC_COURSES.map((courseKey) => {
              const courseName = t(courseKey as never);
              return (
                <label
                  key={courseKey}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(courseName)}
                      onChange={() => onToggleCourse(courseName)}
                      className="peer appearance-none w-5 h-5 border-2 border-midnight/20 dark:border-white/20 rounded-sm checked:bg-gold checked:border-gold focus:outline-hidden hover:border-gold transition-colors cursor-pointer shrink-0"
                    />
                    <svg
                      className="absolute w-3 h-3 text-midnight pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-midnight/80 dark:text-cream/80 text-sm group-hover:text-gold transition-colors">
                    {courseName}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <h5 className="font-sans font-bold text-sm text-amber mb-4 uppercase tracking-wider border-b border-gold/10 pb-2">
            {t("form.student.individualCourses.westernTitle")}
          </h5>
          <div className="space-y-3">
            {WESTERN_COURSES.map((courseKey) => {
              const courseName = t(courseKey as never);
              return (
                <label
                  key={courseKey}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(courseName)}
                      onChange={() => onToggleCourse(courseName)}
                      className="peer appearance-none w-5 h-5 border-2 border-midnight/20 dark:border-white/20 rounded-sm checked:bg-gold checked:border-gold focus:outline-hidden hover:border-gold transition-colors cursor-pointer shrink-0"
                    />
                    <svg
                      className="absolute w-3 h-3 text-midnight pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-midnight/80 dark:text-cream/80 text-sm group-hover:text-gold transition-colors">
                    {courseName}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
