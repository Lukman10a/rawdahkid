"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";
import { weeklyLevelTemplates } from "./levelData";
import type { WeekEntry } from "./types";

export function DetailedCourseSection() {
  const t = useTranslations("ProgMutoon");
  const weeklyLevels = weeklyLevelTemplates.map((level) => {
    const { titleKey, weeks, ...details } = level;

    return {
      ...details,
      title: t(titleKey),
      weeks: weeks.map(
        (week): WeekEntry => ({
          title: t(week.titleKey),
          days: week.days,
        }),
      ),
    };
  });

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t34")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {weeklyLevels.map((level) => (
          <WeeklyLevelCard
            key={level.levelNumber}
            levelNumber={level.levelNumber}
            title={level.title}
            arabicTitle={level.arabicTitle}
            author={level.author}
            duration={level.duration}
            schedule={level.schedule}
            objective={level.objective}
            overview={level.overview}
            weeks={level.weeks}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/50 dark:bg-navy/20 border border-dashed border-gold/40 shadow-sm rounded-xl overflow-hidden p-8 md:p-12 text-center relative"
        >
          <div className="mb-6">
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              {t("t35")}
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-midnight dark:text-white mb-4">
              {t("t36")}
            </h3>
            <p className="font-sans text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto mb-8">
              {t("t37")}
            </p>
          </div>

          <div className="bg-white dark:bg-midnight border border-midnight/5 dark:border-white/5 rounded-lg p-6 max-w-3xl mx-auto text-start">
            <h4 className="font-cinzel text-lg text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 pb-4 mb-4">
              {t("t38")}
            </h4>
            <ul className="space-y-4 font-sans text-midnight/80 dark:text-cream/80">
              <li className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold tracking-wide">{t("t39")}</span>
                  {t("t40")}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold tracking-wide">{t("t41")}</span>
                  {t("t42")}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold tracking-wide">{t("t43")}</span>
                  {t("t44")}
                </div>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-sm font-amiri text-midnight/50 dark:text-cream/50 italic">
            {t("t45")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

type WeeklyLevelCardProps = {
  levelNumber: string;
  title: string;
  arabicTitle: string;
  author: string;
  duration: string;
  schedule: string;
  objective: string;
  overview: string;
  weeks: WeekEntry[];
};

function WeeklyLevelCard({
  levelNumber,
  title,
  arabicTitle,
  author,
  duration,
  schedule,
  objective,
  overview,
  weeks,
}: WeeklyLevelCardProps) {
  const t = useTranslations("ProgMutoon");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30 relative">
        <div className="absolute inset-y-0 inset-e-8 flex items-center pointer-events-none opacity-5">
          <span className="font-amiri text-8xl md:text-9xl tracking-widest leading-none text-white">
            {arabicTitle}
          </span>
        </div>

        <div className="relative z-10">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
                LEVEL {levelNumber}
              </div>
              <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
                {title}
              </h3>
              <p className="font-sans text-cream/70 text-sm">
                Author:{" "}
                <span className="font-semibold text-cream/90">{author}</span>
              </p>
            </div>
            <div className="font-amiri text-3xl text-gold/90 md:text-end">
              {arabicTitle}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
            <div>
              <strong className="text-white">{t("t55")}</strong> {duration}
            </div>
            <div>
              <strong className="text-white">{t("t56")}</strong> {schedule}
            </div>
          </div>

          <div className="text-sm text-cream/80 leading-relaxed space-y-4">
            <div>
              <strong className="text-white">{t("t57")}</strong> {objective}
            </div>
            <div>
              <strong className="text-white">{t("t58")}</strong> {overview}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t59")}
        </h4>

        <div className="space-y-12">
          {weeks.map((week, wIdx) => (
            <div
              key={wIdx}
              className="bg-gray-50/50 dark:bg-navy/30 rounded-lg border border-midnight/5 dark:border-white/5 overflow-hidden"
            >
              <div className="bg-warm/50 dark:bg-deep/80 px-6 py-3 border-b border-midnight/5 dark:border-white/5">
                <h5 className="font-cinzel font-bold text-lg text-midnight dark:text-gold">
                  {week.title}
                </h5>
              </div>
              <div className="divide-y divide-midnight/5 dark:divide-white/5">
                {week.days.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className={`p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 ${d.type === "Revision" ? "bg-emerald-50/30 dark:bg-emerald-950/20" : ""}`}
                  >
                    <div className="md:col-span-3 lg:col-span-2 flex items-start gap-3">
                      <div
                        className={`text-xs font-bold font-sans px-3 py-1 rounded-full uppercase tracking-widest ${
                          d.type === "Revision"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
                            : "bg-gold/10 text-gold border border-gold/20 dark:border-gold/10"
                        }`}
                      >
                        {d.day}
                      </div>
                      <span
                        className={`text-sm font-semibold mt-1 ${d.type === "Revision" ? "text-emerald-700 dark:text-emerald-400" : "text-midnight/60 dark:text-cream/50"}`}
                      >
                        {d.type.toUpperCase()}
                      </span>
                    </div>

                    <div className="md:col-span-9 lg:col-span-10">
                      <p
                        className={`font-sans leading-relaxed ${d.type === "Revision" ? "text-emerald-900/90 dark:text-emerald-100/90" : "text-midnight/80 dark:text-cream/90"}`}
                      >
                        {d.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
