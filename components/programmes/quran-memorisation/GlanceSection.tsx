"use client";

import { useTranslations } from "next-intl";

export default function GlanceSection() {
  const t = useTranslations("ProgQuran");

  const rows = [
    {
      term: t("glance.term1"),
      range: t("t4"),
      surahs: t("t26"),
      weeks: t("glance.w8"),
    },
    {
      term: t("glance.term2"),
      range: t("t5"),
      surahs: t("t27"),
      weeks: t("glance.w8"),
    },
    {
      term: t("glance.term3"),
      range: t("t3"),
      surahs: t("t30"),
      weeks: t("glance.w8"),
    },
    {
      term: t("glance.term4"),
      range: t("t6"),
      surahs: t("t31"),
      weeks: t("glance.w8"),
    },
  ];

  return (
    <section className="py-20 bg-warm/30 dark:bg-deep/30 border-y border-midnight/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
            {t("glance.title")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-midnight/20 dark:border-white/20">
                <th className="py-4 px-6 font-cinzel text-gold text-lg">
                  {t("glance.h_term")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("glance.h_range")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("glance.h_surahs")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("glance.h_weeks")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80">
              {rows.map((row, index) => (
                <tr
                  key={row.term}
                  className={
                    index === rows.length - 1
                      ? "hover:bg-white/50 dark:hover:bg-navy/50 transition-colors"
                      : "border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors"
                  }
                >
                  <td className="py-4 px-6 font-semibold">{row.term}</td>
                  <td className="py-4 px-6">{row.range}</td>
                  <td className="py-4 px-6">{row.surahs}</td>
                  <td className="py-4 px-6">{row.weeks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-sm bg-white dark:bg-navy border border-midnight/10 dark:border-white/10"></div>
            <span className="font-sans text-sm text-midnight/70 dark:text-muted">
              {t("t8")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-sm bg-green-500/20 border border-green-500/30"></div>
            <span className="font-sans text-sm text-midnight/70 dark:text-muted">
              {t("t10")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-sm bg-amber-500/20 border border-amber-500/30"></div>
            <span className="font-sans text-sm text-midnight/70 dark:text-muted">
              {t("t9")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
