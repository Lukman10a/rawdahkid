"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("ProgWestern");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-midnight/10 dark:border-white/10">
      <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
      <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
            {t("hero.title")}
          </h1>
          <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
          <p className="font-sans text-xl text-midnight/70 dark:text-muted max-w-3xl mx-auto leading-relaxed">
            {t("hero.desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
