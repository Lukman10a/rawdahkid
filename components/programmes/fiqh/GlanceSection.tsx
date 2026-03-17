"use client";

import { useTranslations } from "next-intl";

export default function GlanceSection() {
  const t = useTranslations("ProgFiqh");

  const rows = [
    { level: t("t14"), duration: t("t15"), summary: t("t16") },
    { level: t("t17"), duration: t("t18"), summary: t("t19") },
    { level: t("t20"), duration: t("t21"), summary: t("t22") },
    { level: t("t23"), duration: t("t24"), summary: t("t25") },
    { level: t("t26"), duration: t("t27"), summary: t("t28") },
  ];

  return (
    <section className="py-20 bg-warm/30 dark:bg-deep/30 border-y border-midnight/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
            {t("t10")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-midnight/20 dark:border-white/20">
                <th className="py-4 px-6 font-cinzel text-gold text-lg">
                  {t("t11")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t12")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t13")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80">
              {rows.map((row) => (
                <tr
                  key={row.level}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {row.level}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {row.duration}
                  </td>
                  <td className="py-4 px-6 leading-relaxed">{row.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
