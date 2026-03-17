"use client";

import { motion } from "framer-motion";
import { LayoutList, BookText, Speech } from "lucide-react";
import { useTranslations } from "next-intl";

export function DetailedCourseSection() {
  const t = useTranslations("ProgArabic");
  const buildItems = (prefix: string, count: number) =>
    Array.from({ length: count }, (_, index) => t(`${prefix}.i${index + 1}`));

  const levels = [
    {
      levelNumber: "1",
      title: t("t21"),
      arabicTitle: "القاعدة النورانية",
      subtitle: t("level1.subtitle"),
      resource: t("level1.resource"),
      duration: t("t40"),
      frequency: t("level1.freq"),
      aim: t("level1.aim"),
      listTitle: t("level1.listTitle"),
      listItems: buildItems("level1", 12),
    },
    {
      levelNumber: "2",
      title: t("t30"),
      arabicTitle: "نور البيان",
      subtitle: t("level2.subtitle"),
      resource: t("level2.resource"),
      duration: t("t40"),
      frequency: t("level2.freq"),
      aim: t("level2.aim"),
      listTitle: t("level2.listTitle"),
      listItems: buildItems("level2", 12),
    },
    {
      levelNumber: "3",
      title: t("t19"),
      arabicTitle: "المحادثة العربية الأساسية",
      subtitle: t("level3.subtitle"),
      resource: t("level3.resource"),
      duration: t("t40"),
      frequency: t("level3.freq"),
      aim: t("level3.aim"),
      listTitle: t("level3.listTitle"),
      listItems: buildItems("level3", 15),
      icon: <Speech className="w-5 h-5 text-gold" />,
    },
    {
      levelNumber: "4",
      title: t("t22"),
      arabicTitle: "كتاب المدينة — الكتاب الأول",
      subtitle: t("level4.subtitle"),
      resource: t("level4.resource"),
      duration: t("t40"),
      frequency: t("level4.freq"),
      aim: t("level4.aim"),
      listTitle: t("level4.listTitle"),
      listItems: buildItems("level4", 15),
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t24")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        {levels.map((level) => (
          <LevelCard key={level.levelNumber} {...level} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/50 dark:bg-navy/20 border border-gold/40 shadow-lg rounded-xl overflow-hidden relative"
        >
          <div className="absolute top-0 inset-e-0 p-8 opacity-10 pointer-events-none">
            <BookText className="w-48 h-48 text-gold" />
          </div>

          <div className="bg-linear-to-br from-midnight to-navy border-b border-gold/30 p-8 md:p-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  {t("t27")}
                </div>
                <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
                  {t("t23")}
                </h3>
                <p className="font-sans text-cream/70 text-sm md:text-base">
                  {t("t13")}
                </p>
              </div>
              <div className="font-amiri text-2xl md:text-3xl text-gold/90 text-end">
                كتاب المدينة — الكتاب الثاني
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
              <div>
                <strong className="text-white">{t("t36")}</strong>
                {t("t40")}
              </div>
              <div>
                <strong className="text-white">{t("t37")}</strong>
                {t("t11")}
              </div>
            </div>
            <div className="text-sm text-cream/80 leading-relaxed">
              <strong className="text-white block mb-1">{t("t43")}</strong>
              {t("t1")}
            </div>
          </div>

          <div className="p-8 md:p-10 bg-white dark:bg-transparent relative z-10">
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
              <LayoutList className="w-5 h-5 text-gold" />
              {t("t12")}
            </h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {buildItems("level5", 14).map((topic, idx) => (
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

            <div className="bg-ivory dark:bg-midnight p-6 rounded-md border border-midnight/10 dark:border-white/10 text-center space-y-4">
              <h5 className="font-cinzel font-bold text-midnight dark:text-cream text-lg">
                {t("t29")}
              </h5>
              <p className="font-sans text-midnight/80 dark:text-cream/80 text-sm max-w-2xl mx-auto leading-relaxed">
                {t("t0")}
              </p>
              <p className="font-amiri text-gold text-lg italic tracking-widest pt-2">
                وما توفيقي إلا بالله — عليه توكلت وإليه أنيب
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type LevelCardProps = {
  levelNumber: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  resource: string;
  duration: string;
  frequency: string;
  aim: string;
  listTitle: string;
  listItems: string[];
  icon?: React.ReactNode;
};

function LevelCard({
  levelNumber,
  title,
  arabicTitle,
  subtitle,
  resource,
  duration,
  frequency,
  aim,
  listTitle,
  listItems,
  icon,
}: LevelCardProps) {
  const t = useTranslations("ProgArabic");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              {t("levelLabel")} {levelNumber} — {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm">
              {t("resourceLabel")}{" "}
              <span className="font-semibold text-cream/90">{resource}</span>
            </p>
          </div>
          <div className="font-amiri text-3xl text-gold/90 md:text-end">
            {arabicTitle}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t36")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t34")}</strong> {frequency}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">{t("t43")}</strong> {aim}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
          {icon ? icon : <LayoutList className="w-5 h-5 text-gold" />}{" "}
          {listTitle}
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {listItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
