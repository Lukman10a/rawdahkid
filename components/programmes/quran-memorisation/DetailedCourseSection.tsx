"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

type WeekPlan = {
  w: number;
  type: string;
  content: string;
};

type WeekType = "memo" | "rev" | "exam";

type TermConfig = {
  number: string;
  titleKey: string;
  subtitleKey: string;
  arabicKey: string;
  totalSurahsKey: string;
  durationKey: string;
  structureKey: string;
  objectiveKey: string;
  noteKey?: string;
  weekTypes: WeekType[];
};

type TermCardProps = {
  number: string;
  title: string;
  subtitle: string;
  arabic: string;
  totalSurahs: string;
  duration: string;
  structure: string;
  objective: string;
  note?: string;
  weeks: WeekPlan[];
};

function TermCard({
  number,
  title,
  subtitle,
  arabic,
  totalSurahs,
  duration,
  structure,
  objective,
  note,
  weeks,
}: TermCardProps) {
  const t = useTranslations("ProgQuran");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
              {t("termLabel")} {number}
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70">{subtitle}</p>
          </div>
          <div className="font-amiri text-3xl md:text-4xl text-gold/90 text-end">
            {arabic}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80">
          <div>
            <strong className="text-white">{t("t29")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t32")}</strong> {totalSurahs}
          </div>
          <div className="md:col-span-2">
            <strong className="text-white">{t("t24")}</strong> {structure}
          </div>
          <div className="md:col-span-2">
            <strong className="text-white">{t("t25")}</strong> {objective}
          </div>
          {note && (
            <div className="md:col-span-2 text-gold italic">
              <strong className="text-white not-italic">{t("t34")}</strong>{" "}
              {note}
            </div>
          )}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gold" />
          {t("t17")}
        </h4>
        <div className="space-y-3">
          {weeks.map((week, idx) => {
            const isRev = week.type === "rev";
            const isExam = week.type === "exam";

            let bgClass = "bg-ivory dark:bg-midnight";
            let borderClass = "border-midnight/5 dark:border-white/5";
            let typeLabel = t("typeLabels.memo");
            let iconColor = "text-gold";

            if (isRev) {
              bgClass = "bg-green-500/10 dark:bg-green-500/10";
              borderClass = "border-green-500/20";
              typeLabel = t("typeLabels.rev");
              iconColor = "text-green-600 dark:text-green-400";
            } else if (isExam) {
              bgClass = "bg-amber-500/10 dark:bg-amber-500/10";
              borderClass = "border-amber-500/20";
              typeLabel = t("typeLabels.exam");
              iconColor = "text-amber-600 dark:text-amber-400";
            }

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center p-4 border rounded-md ${bgClass} ${borderClass}`}
              >
                <div className="flex items-center sm:w-1/3 mb-2 sm:mb-0">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-navy flex items-center justify-center font-bold font-cinzel text-midnight dark:text-cream shadow-xs me-4 shrink-0 border border-midnight/5 dark:border-white/5">
                    {week.w}
                  </div>
                  <span
                    className={`font-cinzel text-sm md:text-base font-semibold tracking-wider uppercase ${iconColor}`}
                  >
                    {typeLabel}
                  </span>
                </div>
                <div className="sm:w-2/3 font-sans text-midnight/80 dark:text-cream border-s sm:border-midnight/10 sm:dark:border-white/10 sm:ps-4 ps-12 sm:ms-0">
                  {week.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailedCourseSection() {
  const t = useTranslations("ProgQuran");

  const termConfigs: TermConfig[] = [
    {
      number: "1",
      titleKey: "t13",
      subtitleKey: "term1.subtitle",
      arabicKey: "term1.arabic",
      totalSurahsKey: "t26",
      durationKey: "term1.duration",
      structureKey: "term1.structure",
      objectiveKey: "term1.objective",
      weekTypes: [
        "memo",
        "memo",
        "memo",
        "memo",
        "rev",
        "memo",
        "memo",
        "exam",
      ],
    },
    {
      number: "2",
      titleKey: "t11",
      subtitleKey: "term2.subtitle",
      arabicKey: "term2.arabic",
      totalSurahsKey: "t27",
      durationKey: "term2.duration",
      structureKey: "term2.structure",
      objectiveKey: "term2.objective",
      weekTypes: [
        "memo",
        "memo",
        "memo",
        "memo",
        "rev",
        "memo",
        "memo",
        "exam",
      ],
    },
    {
      number: "3",
      titleKey: "t7",
      subtitleKey: "term3.subtitle",
      arabicKey: "term3.arabic",
      totalSurahsKey: "t30",
      durationKey: "term3.duration",
      structureKey: "term3.structure",
      objectiveKey: "term3.objective",
      noteKey: "term3.note",
      weekTypes: [
        "memo",
        "memo",
        "memo",
        "memo",
        "rev",
        "memo",
        "memo",
        "exam",
      ],
    },
    {
      number: "4",
      titleKey: "t12",
      subtitleKey: "term4.subtitle",
      arabicKey: "term4.arabic",
      totalSurahsKey: "t31",
      durationKey: "term4.duration",
      structureKey: "term4.structure",
      objectiveKey: "term4.objective",
      noteKey: "term4.note",
      weekTypes: [
        "memo",
        "memo",
        "memo",
        "memo",
        "memo",
        "memo",
        "memo",
        "exam",
      ],
    },
  ];

  const buildWeeks = (termNumber: string, weekTypes: WeekType[]): WeekPlan[] =>
    weekTypes.map((type, index) => ({
      w: index + 1,
      type,
      content: t(`term${termNumber}.w${index + 1}`),
    }));

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t21")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {termConfigs.map((term) => (
          <TermCard
            key={term.number}
            number={term.number}
            title={t(term.titleKey)}
            subtitle={t(term.subtitleKey)}
            arabic={t(term.arabicKey)}
            totalSurahs={t(term.totalSurahsKey)}
            duration={t(term.durationKey)}
            structure={t(term.structureKey)}
            objective={t(term.objectiveKey)}
            note={term.noteKey ? t(term.noteKey) : undefined}
            weeks={buildWeeks(term.number, term.weekTypes)}
          />
        ))}
      </div>
    </section>
  );
}
