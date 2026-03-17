"use client";

import { useTranslations } from "next-intl";

export function GlanceSection() {
  const t = useTranslations("ProgTawheed");
  const rows = [
    { level: t("t19"), title: t("t20"), duration: t("t21"), focus: t("t22") },
    { level: t("t23"), title: t("t24"), duration: t("t25"), focus: t("t26") },
    { level: t("t27"), title: t("t28"), duration: t("t25"), focus: t("t30") },
    { level: t("t31"), title: t("t32"), duration: t("t25"), focus: t("t34") },
    { level: t("t35"), title: t("t36"), duration: t("t25"), focus: t("t38") },
  ];

  return (
    <section className="py-20 bg-warm/30 dark:bg-deep/30 border-y border-midnight/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
            {t("t14")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-midnight/20 dark:border-white/20">
                <th className="py-4 px-6 font-cinzel text-gold text-lg">
                  {t("t15")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t16")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t17")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t18")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80">
              {rows.map((row, idx) => (
                <tr
                  key={row.level}
                  className={`hover:bg-white/50 dark:hover:bg-navy/50 transition-colors ${idx !== rows.length - 1 ? "border-b border-midnight/5 dark:border-white/5" : ""}`}
                >
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {row.level}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {row.title}
                  </td>
                  <td className="py-4 px-6">{row.duration}</td>
                  <td className="py-4 px-6 leading-relaxed">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
