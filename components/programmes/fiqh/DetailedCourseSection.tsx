"use client";

import { motion } from "framer-motion";
import { LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";
import { levelConfigs } from "./levelData";

type SingleSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  topics: string[];
};

type DualSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  sectionTitle1?: string;
  sectionTitle2?: string;
  section1: string[];
  section2: string[];
};

function SingleSectionLevelCard({
  levelNumber,
  title,
  focus,
  aim,
  topics,
}: SingleSectionLevelCardProps) {
  const t = useTranslations("ProgFiqh");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6">
          <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
            LEVEL {levelNumber} - BASIC FIQH
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white md:mb-2">
            {title}
          </h3>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t39")}</strong> {focus}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {aim}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t41")}
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-sans text-midnight/80 dark:text-cream/90">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DualSectionLevelCard({
  levelNumber,
  title,
  focus,
  aim,
  sectionTitle1 = "Section 1",
  sectionTitle2 = "Section 2",
  section1,
  section2,
}: DualSectionLevelCardProps) {
  const t = useTranslations("ProgFiqh");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6">
          <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
            LEVEL {levelNumber} - BASIC FIQH
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white md:mb-2">
            {title}
          </h3>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t39")}</strong> {focus}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {aim}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream border-b-2 border-gold/40 pb-2 mb-6 inline-block">
              {sectionTitle1}
            </h4>
            <div className="space-y-4">
              {section1.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
                >
                  <span className="flex items-center justify-center min-w-6 h-6 rounded-md bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 text-midnight dark:text-cream text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 pt-0.5">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream border-b-2 border-gold/40 pb-2 mb-6 inline-block">
              {sectionTitle2}
            </h4>
            <div className="space-y-4">
              {section2.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
                >
                  <span className="flex items-center justify-center min-w-6 h-6 rounded-md bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 text-midnight dark:text-cream text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 pt-0.5">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailedCourseSection() {
  const t = useTranslations("ProgFiqh");

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t29")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {levelConfigs.map((level) =>
          level.type === "single" ? (
            <SingleSectionLevelCard
              key={level.levelNumber}
              levelNumber={level.levelNumber}
              title={t(level.titleKey)}
              focus={level.focus}
              aim={level.aim}
              topics={level.topics}
            />
          ) : (
            <DualSectionLevelCard
              key={level.levelNumber}
              levelNumber={level.levelNumber}
              title={t(level.titleKey)}
              focus={level.focus}
              aim={level.aim}
              sectionTitle1={level.sectionTitle1}
              sectionTitle2={level.sectionTitle2}
              section1={level.section1}
              section2={level.section2}
            />
          ),
        )}
      </div>
    </section>
  );
}
