"use client";

import { motion } from "framer-motion";
import { Sigma } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("ProgMathematics");

  return (
    <section className="w-full min-w-0 relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
      <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
      <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full mb-6">
            <Sigma className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
            {t("t0")}
          </h1>
          <h2 className="font-sans text-xl md:text-2xl text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 font-semibold">
            {t("t1")}
          </h2>

          <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-8 flex flex-wrap justify-center gap-2">
            <span>{t("t2")}</span>
            <span className="hidden sm:inline">{t("t3")}</span>
            <span>{t("t4")}</span>
            <span className="hidden sm:inline">{t("t3")}</span>
            <span>{t("t6")}</span>
            <span className="hidden sm:inline">{t("t3")}</span>
            <span>{t("t8")}</span>
          </div>

          <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
            {t("t9")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
