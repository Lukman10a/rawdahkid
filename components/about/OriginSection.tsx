"use client";

import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

export function OriginSection() {
  const t = useTranslations("About");

  return (
    <section className="py-24 bg-white dark:bg-cream/10 border-t border-midnight/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BookOpen className="w-12 h-12 text-gold mx-auto mb-8 opacity-80" />
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight tracking-wider mb-8">
          {t("origin.title")}
        </h2>
        <div className="prose prose-lg mx-auto text-midnight/80 font-sans leading-relaxed text-start md:text-center space-y-6">
          <p>{t("origin.p1")}</p>
          <p>{t("origin.p2")}</p>
          <p>{t("origin.p3")}</p>
          <p className="font-playfair italic text-xl text-amber pt-4">
            {t("origin.quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
