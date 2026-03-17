"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, BookText } from "lucide-react";
import { useTranslations } from "next-intl";

export function OverviewResourcesSection() {
  const t = useTranslations("ProgArabic");

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
            {t("overview.title")}
          </h2>
          <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
            <p>{t("overview.p1")}</p>
            <p>{t("t2")}</p>
            <p className="font-semibold text-midnight dark:text-cream italic border-s-4 border-gold ps-4 py-1">
              {t("t3")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
        >
          <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
            <BookText className="w-7 h-7 text-gold" />
            {t("resources.title")}
          </h2>
          <ul className="space-y-6">
            {[
              {
                title: t("resources.r1.title"),
                desc: t("resources.r1.desc"),
              },
              {
                title: t("resources.r2.title"),
                desc: t("resources.r2.desc"),
              },
              {
                title: t("resources.r3.title"),
                desc: t("resources.r3.desc"),
              },
              {
                title: t("resources.r4.title"),
                desc: t("resources.r4.desc"),
              },
            ].map((resource, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <span className="font-cinzel font-bold text-midnight dark:text-cream block mb-1">
                    {resource.title}
                  </span>
                  <span className="font-sans text-sm text-midnight/70 dark:text-cream/70 leading-relaxed">
                    {resource.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
