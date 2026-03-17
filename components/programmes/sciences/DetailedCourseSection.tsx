"use client";

import { motion } from "framer-motion";
import { TestTube } from "lucide-react";
import { useTranslations } from "next-intl";

type Unit = {
  no: number;
  topic: string;
  duration: string;
  skills: string;
};

type LevelCardProps = {
  levelNumber: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  duration: string;
  aim: string;
  units: Unit[];
};

type LevelConfig = Omit<LevelCardProps, "title" | "units"> & {
  titleKey: string;
};

function LevelCard({
  levelNumber,
  title,
  subtitle,
  ageGroup,
  duration,
  aim,
  units,
}: LevelCardProps) {
  const t = useTranslations("ProgSciences");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-emerald-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-emerald-400 dark:text-emerald-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              LEVEL {levelNumber} - {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm font-semibold">
              {ageGroup}
            </p>
          </div>
          <div className="md:text-end">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-emerald-400">
              <TestTube className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t27")}</strong> {duration}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">{t("t28")}</strong> {aim}
        </div>
      </div>

      <div className="p-0 bg-white dark:bg-transparent">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-200">
            <thead>
              <tr className="border-b-2 border-emerald-100 dark:border-white/10 bg-emerald-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-emerald-700 dark:text-emerald-400 font-bold w-16 text-center">
                  {t("unitLabel")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/4">
                  {t("topicLabel")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/5 whitespace-nowrap">
                  {t("durationLabel")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold">
                  {t("skillsLabel")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80 text-sm">
              {units.map((unit, idx) => (
                <tr
                  key={idx}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-center text-emerald-600 dark:text-emerald-400">
                    {unit.no}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {unit.topic}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">
                    {unit.duration}
                  </td>
                  <td className="py-4 px-6 leading-relaxed">{unit.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailedCourseSection() {
  const t = useTranslations("ProgSciences");

  const levels: LevelConfig[] = [
    {
      levelNumber: "1",
      titleKey: "t36",
      subtitle: t("t44"),
      ageGroup: "Ages 6-7 | NGSS Kindergarten-Grade 1",
      duration: "36 Weeks | 2-3 Sessions/Week | 40 Min/Session",
      aim: "To develop curiosity about the natural world through observation, questioning, and hands-on exploration of weather, plants, animals, and materials.",
    },
    {
      levelNumber: "2",
      titleKey: "t41",
      subtitle: t("t45"),
      ageGroup: "Ages 7-8 | NGSS Grade 2",
      duration: "36 Weeks | 2-3 Sessions/Week | 40 Min/Session",
      aim: "To investigate life cycles, properties of matter, Earth materials, and the engineering design process through inquiry-based learning.",
    },
    {
      levelNumber: "3",
      titleKey: "t37",
      subtitle: t("t46"),
      ageGroup: "Ages 8-9 | NGSS Grade 3",
      duration: "36 Weeks | 2-3 Sessions/Week | 45 Min/Session",
      aim: "To investigate forces, traits and inheritance, fossils, ecosystems, and climate patterns through structured scientific inquiry.",
    },
    {
      levelNumber: "4",
      titleKey: "t42",
      subtitle: t("t47"),
      ageGroup: "Ages 9-10 | NGSS Grade 4",
      duration: "36 Weeks | 2-3 Sessions/Week | 45 Min/Session",
      aim: "To study energy transfer, wave behaviour, Earth's geological history, and plant and animal internal structures.",
    },
    {
      levelNumber: "5",
      titleKey: "t38",
      subtitle: t("t48"),
      ageGroup: "Ages 10-11 | NGSS Grade 5",
      duration: "36 Weeks | 2-3 Sessions/Week | 50 Min/Session",
      aim: "To study matter at the atomic level, Earth's systems, the solar system, and human body systems - preparing students for secondary science.",
    },
    {
      levelNumber: "6",
      titleKey: "t34",
      subtitle: t("t49"),
      ageGroup: "Ages 11-12 | Lower Secondary Science",
      duration: "36 Weeks | 3 Sessions/Week | 50 Min/Session",
      aim: "To introduce cell biology, foundational chemistry, Earth structure, and begin the transition to disciplinary science study.",
    },
    {
      levelNumber: "7",
      titleKey: "t39",
      subtitle: t("t50"),
      ageGroup: "Ages 12-13 | Lower Secondary Science",
      duration: "36 Weeks | 3 Sessions/Week | 55 Min/Session",
      aim: "To study fundamental biology, physics, and chemistry in a structured, discipline-aware manner, building towards GCSE/IGCSE-level work.",
    },
    {
      levelNumber: "8",
      titleKey: "t32",
      subtitle: t("t51"),
      ageGroup: "Ages 13-14 | GCSE/IGCSE Foundation",
      duration: "36 Weeks | 3 Sessions/Week | 55 Min/Session",
      aim: "To advance in all three sciences at GCSE/IGCSE foundation level, developing the analytical skills needed for formal examinations.",
    },
    {
      levelNumber: "9",
      titleKey: "t35",
      subtitle: t("t52"),
      ageGroup: "Ages 14-15 | GCSE/IGCSE Year 1",
      duration: "36 Weeks | 3 Sessions/Week | 60 Min/Session",
      aim: "To complete GCSE/IGCSE core content across all three sciences, developing exam skills, required practicals, and scientific communication.",
    },
    {
      levelNumber: "10",
      titleKey: "t33",
      subtitle: t("t43"),
      ageGroup: "Ages 15-16 | GCSE/IGCSE Year 2 & Beyond",
      duration: "36 Weeks | 3 Sessions/Week | 60 Min/Session",
      aim: "To complete GCSE/IGCSE preparation, master all required content, and introduce students to A-Level/pre-university science thinking.",
    },
  ];

  const buildUnits = (levelNumber: string): Unit[] =>
    Array.from({ length: 8 }).map((_, j) => ({
      no: j + 1,
      topic: t(`lvl${levelNumber}.u${j + 1}.t`),
      duration: t(`lvl${levelNumber}.u${j + 1}.d`),
      skills: t(`lvl${levelNumber}.u${j + 1}.s`),
    }));

  return (
    <section className="w-full min-w-0 py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t17")}
        </h2>
        <div className="w-24 h-px bg-emerald-600/50 dark:bg-emerald-400/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {levels.map((level) => (
          <LevelCard
            key={level.levelNumber}
            levelNumber={level.levelNumber}
            title={t(level.titleKey)}
            subtitle={level.subtitle}
            ageGroup={level.ageGroup}
            duration={level.duration}
            aim={level.aim}
            units={buildUnits(level.levelNumber)}
          />
        ))}
      </div>
    </section>
  );
}
