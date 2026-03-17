"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IslamicPatternBackground } from "./IslamicPatternBackground";

export function AboutHeroSection() {
  const t = useTranslations("About");

  return (
    <section className="relative py-24 md:py-32 bg-ivory dark:bg-midnight overflow-hidden">
      <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>

      <IslamicPatternBackground
        patternId="islamic-pattern-about"
        withCenterCircle
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
            {t("hero.title")}
          </h1>
          <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
          <p className="font-playfair italic text-2xl md:text-4xl text-amber/90 max-w-4xl mx-auto leading-relaxed">
            {t("hero.quote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
