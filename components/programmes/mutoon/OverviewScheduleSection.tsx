"use client";

import { motion } from "framer-motion";
import { BookOpen, CalendarDays, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";

export function OverviewScheduleSection() {
  const t = useTranslations("ProgMutoon");

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
          <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
            <CalendarDays className="w-7 h-7 text-gold" />
            {t("t13")}
          </h2>
          <p className="font-sans text-midnight/80 dark:text-cream/80 mb-6 leading-relaxed">
            {t("t14")}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 border border-midnight/5 dark:border-white/5 rounded-lg bg-gray-50 dark:bg-transparent">
              <BookOpen className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-midnight dark:text-cream mb-1 font-cinzel tracking-wider">
                  {t("t15")}
                </h4>
                <p className="text-sm text-midnight/70 dark:text-cream/70 font-sans">
                  {t("t16")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-emerald-500/20 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10 relative overflow-hidden">
              <div className="absolute inset-s-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
              <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-1 font-cinzel tracking-wider">
                  {t("t17")}
                </h4>
                <p className="text-sm text-emerald-900/70 dark:text-emerald-100/70 font-sans">
                  {t("t18")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
