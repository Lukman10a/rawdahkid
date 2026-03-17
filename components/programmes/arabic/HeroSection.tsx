"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("ProgArabic");

  return (
    <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
      <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
      <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-amiri text-gold text-2xl md:text-3xl mb-4">
            بسم الله الرحمان الرحيم
          </p>
          <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
            {t("hero.title")}
          </h1>
          <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">
            منهج تعليم اللغة العربية
          </p>
          <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6 flex flex-wrap justify-center gap-2">
            <span>{t("hero.subtitle1")}</span>
            <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
            <span>{t("hero.subtitle2")}</span>
            <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
            <span>{t("hero.subtitle3")}</span>
            <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
            <span>{t("hero.subtitle4")}</span>
          </div>

          <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
            {t("t9")}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-12 text-sm font-cinzel font-bold text-midnight/70 dark:text-cream/70">
            <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
              {t("t31")}
            </span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
              {t("t32")}
            </span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
              {t("t35")}
            </span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
              {t("t33")}
            </span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
              {t("t41")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
