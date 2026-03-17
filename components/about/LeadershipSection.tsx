"use client";

import { Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { IslamicPatternBackground } from "./IslamicPatternBackground";
import { Reveal } from "./Reveal";

export function LeadershipSection() {
  const t = useTranslations("About");

  return (
    <section className="py-24 bg-ivory dark:bg-midnight border-t border-midnight/5 relative overflow-hidden">
      <IslamicPatternBackground patternId="islamic-pattern-leadership" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Award className="w-12 h-12 text-gold mx-auto mb-8 opacity-80" />
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream tracking-wider mb-10">
          {t("leadership.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start md:text-start">
          <Reveal
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.0 }}
            className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-xs border border-midnight/5 hover:border-gold/30 transition-colors duration-300 space-y-4"
          >
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p1")}
            </p>
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p2")}
            </p>
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p3")}
            </p>
          </Reveal>

          <Reveal
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-xs border border-midnight/5 hover:border-gold/30 transition-colors duration-300 space-y-4"
          >
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p4")}
            </p>
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p5")}
            </p>
          </Reveal>

          <Reveal
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-xs border border-midnight/5 hover:border-gold/30 transition-colors duration-300 md:col-span-2 space-y-4"
          >
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p6")}
            </p>
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p8")}
            </p>
            <p className="font-sans text-midnight/80 dark:text-cream/80 leading-relaxed">
              {t("leadership.p9")}
            </p>
            <p className="font-sans text-amber font-semibold leading-relaxed text-center mt-6 text-lg">
              {t("leadership.p7")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
