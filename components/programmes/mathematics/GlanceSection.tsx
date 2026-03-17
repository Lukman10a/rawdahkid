"use client";

import { useTranslations } from "next-intl";

export default function GlanceSection() {
  const t = useTranslations("ProgMathematics");

  const rows = [
    { lvl: "1", age: "3-6", focus: t("t54") },
    { lvl: "2", age: "6-7", focus: t("t50") },
    { lvl: "3", age: "7-8", focus: t("t48") },
    { lvl: "4", age: "8-9", focus: t("t55") },
    { lvl: "5", age: "9-10", focus: t("t51") },
    { lvl: "6", age: "10-11", focus: t("t61") },
    { lvl: "7", age: "11-12", focus: t("t52") },
    { lvl: "8", age: "12-13", focus: t("t58") },
    { lvl: "9", age: "13-14", focus: t("t56") },
    { lvl: "10", age: "14-15", focus: t("t49") },
  ];

  return (
    <section className="w-full min-w-0 py-20 bg-blue-50/50 dark:bg-blue-900/10 border-y border-midnight/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
            {t("t15")}
          </h2>
          <div className="w-24 h-px bg-blue-600/50 dark:bg-blue-400/50 mx-auto"></div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-midnight/20 dark:border-white/20">
                <th className="py-4 px-6 font-cinzel text-blue-700 dark:text-blue-400 text-lg w-20">
                  {t("t16")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">
                  {t("t17")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                  {t("t18")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80">
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors"
                >
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    {row.lvl}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {row.age}
                  </td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {row.focus}
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
