"use client";

import { motion } from "framer-motion";
import { Sigma } from "lucide-react";
import { useTranslations } from "next-intl";

type Unit = {
  no: number;
  topic: string;
  duration: string;
  skills?: string;
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
  const t = useTranslations("ProgMathematics");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-blue-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-blue-400 dark:text-blue-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
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
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-blue-400">
              <Sigma className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t29")}</strong> {duration}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">{t("t30")}</strong> {aim}
        </div>
      </div>

      <div className="p-0 bg-white dark:bg-transparent">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-200">
            <thead>
              <tr className="border-b-2 border-blue-100 dark:border-white/10 bg-blue-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-blue-700 dark:text-blue-400 font-bold w-16 text-center">
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
                  <td className="py-4 px-6 font-bold text-center text-blue-600 dark:text-blue-400">
                    {unit.no}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {unit.topic}
                  </td>
                  <td className="py-4 px-6 text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap">
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
  const t = useTranslations("ProgMathematics");

  const levels: LevelConfig[] = [
    {
      levelNumber: "1",
      titleKey: "t40",
      subtitle: "Kindergarten",
      ageGroup: "Ages 3–6 | Early Years Foundation",
      duration: "36 Weeks | 4–5 Sessions/Week | 40 Min/Session",
      aim: "To build solid number sense, addition and subtraction fluency within 20, understand shapes, and develop early problem-solving and measurement skills based on standard Go Math pacing.",
    },
    {
      levelNumber: "2",
      titleKey: "t43",
      subtitle: "Grade 1",
      ageGroup: "Ages 6–7 | Grade 1",
      duration: "36 Weeks | 4–5 Sessions/Week | 40 Min/Session",
      aim: "To master addition and subtraction to 1,000, introduce multiplication and division concepts, and strengthen fractions and measurement.",
    },
    {
      levelNumber: "3",
      titleKey: "t37",
      subtitle: "Grade 2",
      ageGroup: "Ages 7–8 | Grade 2",
      duration: "36 Weeks | 4–5 Sessions/Week | 45 Min/Session",
      aim: "To achieve fluency in multiplication and division facts to 12, introduce fractions on a number line, and develop multi-step problem solving.",
    },
    {
      levelNumber: "4",
      titleKey: "t36",
      subtitle: "Grade 3",
      ageGroup: "Ages 8–9 | Grade 3",
      duration: "36 Weeks | 4–5 Sessions/Week | 45 Min/Session",
      aim: "To master multi-digit multiplication and division, build fraction arithmetic, and introduce algebraic thinking and geometry.",
    },
    {
      levelNumber: "5",
      titleKey: "t38",
      subtitle: "Grade 4",
      ageGroup: "Ages 9–10 | Grade 4",
      duration: "36 Weeks | 4–5 Sessions/Week | 50 Min/Session",
      aim: "To master fraction and decimal operations, introduce ratios, percentages, integers, and lay groundwork for algebra and coordinate geometry.",
    },
    {
      levelNumber: "6",
      titleKey: "t39",
      subtitle: "Grade 5",
      ageGroup: "Ages 10–11 | Grade 5",
      duration: "36 Weeks | 4–5 Sessions/Week | 50 Min/Session",
      aim: "To develop strong algebraic thinking, master ratio and proportional relationships, explore statistics, and transition confidently into formal algebra.",
    },
    {
      levelNumber: "7",
      titleKey: "t41",
      subtitle: "Grade 6",
      ageGroup: "Ages 11–12 | Grade 6",
      duration: "36 Weeks | 4–5 Sessions/Week | 55 Min/Session",
      aim: "To develop proportional reasoning, linear relationships, and foundational algebra skills including equations, inequalities, and geometry of two-dimensional figures.",
    },
    {
      levelNumber: "8",
      titleKey: "t42",
      subtitle: "Grade 7",
      ageGroup: "Ages 12–13 | Grade 7",
      duration: "36 Weeks | 4–5 Sessions/Week | 55 Min/Session",
      aim: "To complete Algebra I, covering linear functions and systems of equations, and introduce geometric proofs, the Pythagorean theorem, and transformations.",
    },
    {
      levelNumber: "9",
      titleKey: "t34",
      subtitle: "Grade 8",
      ageGroup: "Ages 13–14 | Grade 8",
      duration: "36 Weeks | 4–5 Sessions/Week | 55–60 Min/Session",
      aim: "To extend algebra to quadratic and exponential functions, introduce complex numbers, and lay foundations for trigonometry and advanced problem solving.",
    },
    {
      levelNumber: "10",
      titleKey: "t35",
      subtitle: "Grade 9",
      ageGroup: "Ages 14–15 | Grade 9",
      duration: "36 Weeks | 4–5 Sessions/Week | 60 Min/Session",
      aim: "To develop advanced mathematical reasoning through functions, conic sections, matrices, probability, and an introduction to calculus concepts.",
    },
  ];

  const buildUnits = (levelNumber: string): Unit[] =>
    Array.from({ length: 10 }).map((_, j) => ({
      no: j + 1,
      topic: t(`lvl${levelNumber}.u${j + 1}.t`),
      duration: t(`lvl${levelNumber}.u${j + 1}.d`),
      skills: t(`lvl${levelNumber}.u${j + 1}.s`),
    }));

  return (
    <section className="w-full min-w-0 py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t19")}
        </h2>
        <div className="w-24 h-px bg-blue-600/50 dark:bg-blue-400/50 mx-auto"></div>
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
