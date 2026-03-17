"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("ProgQuran");

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
            برنامج حفظ القرآن الكريم
          </p>
          <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6">
            <span dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }} />
          </div>

          <div className="inline-flex items-center gap-4 bg-white/50 dark:bg-navy/50 px-6 py-3 rounded-full border border-midnight/5 dark:border-white/5 mb-8">
            <span className="font-amiri text-xl">{t("t22")}</span>
            <span className="text-gold">⟶</span>
            <span className="font-amiri text-xl">{t("t20")}</span>
          </div>

          <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
            {t("hero.quote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
