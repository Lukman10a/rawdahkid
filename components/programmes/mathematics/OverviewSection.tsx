"use client";

import { motion } from "framer-motion";
import { Calculator, CheckCircle, Compass } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OverviewSection() {
  const t = useTranslations("ProgMathematics");

  const resources = [
    { title: t("t59"), desc: t("t45") },
    { title: t("t53"), desc: t("t44") },
    { title: t("t57"), desc: t("t47") },
    { title: t("t60"), desc: t("t46") },
  ];

  return (
    <section className="w-full min-w-0 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
            <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("t10")}
          </h2>
          <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
            <p>{t("t11")}</p>
            <p>{t("t12")}</p>
            <p className="font-semibold text-midnight dark:text-cream italic border-s-4 border-blue-600 dark:border-blue-400 ps-4 py-1">
              {t("t13")}
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
            <Calculator className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            {t("t14")}
          </h2>
          <ul className="space-y-6">
            {resources.map((resource, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
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
