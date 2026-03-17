"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function OverviewSection() {
  const t = useTranslations("ProgTawheed");
  const principles = [
    "Established upon the authentic methodology and Saudi Arabia school curriculum.",
    "Gradual progression building unshakeable Islamic foundations.",
    "Deep understanding of the Three Fundamental Principles.",
    "Clear distinction between true Monotheism and its nullifiers.",
    "Practical integration into daily life, prayer, and character.",
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-gold" />
            {t("t9")}
          </h2>
          <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
            <p>{t("t10")}</p>
            <p>{t("t11")}</p>
            <p>{t("t12")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
        >
          <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6">
            {t("t13")}
          </h2>
          <ul className="space-y-5">
            {principles.map((principle, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
