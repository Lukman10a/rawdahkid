"use client";

import { useTranslations } from "next-intl";

export function HeaderSection() {
  const t = useTranslations("Contact");

  return (
    <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
          {t("header.title")}
        </h1>
        <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
          {t("header.desc")}
        </p>
      </div>
    </section>
  );
}
