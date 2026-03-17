"use client";

import { useTranslations } from "next-intl";

export function GlanceSection() {
  const t = useTranslations("ProgArabic");
  const rows = [
    { level: 1, title: t("t21"), duration: t("t40"), details: t("t8") },
    { level: 2, title: t("t30"), duration: t("t40"), details: t("t10") },
    { level: 3, title: t("t25"), duration: t("t40"), details: t("t6") },
    { level: 4, title: t("t22"), duration: t("t40"), details: t("t7") },
    { level: 5, title: t("t23"), duration: t("t40"), details: t("t5") },
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
          <table className="w-full text-start border-collapse min-w-200">
            <thead>
              <tr className="border-b border-midnight/20 dark:border-white/20">
                <th className="py-4 px-6 font-cinzel text-gold text-lg w-20">
                  {t("t44")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-64">
                  {t("t28")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">
                  {t("t39")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t15")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80">
              {rows.map((row) => (
                <tr
                  key={row.level}
                  className={`hover:bg-white/50 dark:hover:bg-navy/50 transition-colors ${row.level !== rows.length ? "border-b border-midnight/5 dark:border-white/5" : ""}`}
                >
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    {row.level}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {row.title}
                  </td>
                  <td className="py-4 px-6">{row.duration}</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
