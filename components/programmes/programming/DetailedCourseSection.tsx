"use client";

import { motion } from "framer-motion";
import { Laptop } from "lucide-react";
import { useTranslations } from "next-intl";
import { levelConfigs } from "./levelData";
import type { LevelCardProps } from "./types";

function LevelCard({
  levelNumber,
  title,
  subtitle,
  ageGroup,
  duration,
  aim,
  units,
}: LevelCardProps) {
  const t = useTranslations("ProgProgramming");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-indigo-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-indigo-400 dark:text-indigo-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
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
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-indigo-400">
              <Laptop className="w-6 h-6" />
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
              <tr className="border-b-2 border-indigo-100 dark:border-white/10 bg-indigo-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-indigo-700 dark:text-indigo-400 font-bold w-16 text-center">
                  {t("t29")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/2">
                  {t("t30")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold">
                  {t("t31")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80 text-sm">
              {units.map((unit, idx) => (
                <tr
                  key={idx}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-center text-indigo-600 dark:text-indigo-400">
                    {unit.no}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {unit.topic}
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
  const t = useTranslations("ProgProgramming");

  return (
    <section className="w-full min-w-0 py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t17")}
        </h2>
        <div className="w-24 h-px bg-indigo-600/50 dark:bg-indigo-400/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {levelConfigs.map((level) => (
          <LevelCard
            key={level.levelNumber}
            levelNumber={level.levelNumber}
            title={t(level.titleKey)}
            subtitle={level.subtitle}
            ageGroup={level.ageGroup}
            duration={level.duration}
            aim={level.aim}
            units={level.units}
          />
        ))}
      </div>
    </section>
  );
}
