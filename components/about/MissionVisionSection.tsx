"use client";

import { Compass, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function MissionVisionSection() {
  const t = useTranslations("About");

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        <Reveal
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 md:p-14 shadow-2xl rounded-sm border border-gold/10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="absolute top-0 inset-s-0 w-2 h-full bg-gold"></div>
          <div className="flex items-center gap-4 mb-8">
            <Compass className="w-10 h-10 text-gold" />
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider">
              {t("mission.title")}
            </h2>
          </div>
          <p className="font-sans text-lg text-midnight/80 leading-relaxed space-y-4">
            <span className="block">{t("mission.p1")}</span>
            <span className="block mt-4">{t("mission.p2")}</span>
          </p>
        </Reveal>

        <Reveal
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-warm dark:bg-deep p-10 md:p-14 shadow-2xl rounded-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white dark:from-navy/30 to-ivory dark:to-midnight/80 pointer-events-none"></div>
          <div className="absolute top-0 inset-s-0 w-full h-2 bg-green/80"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Star className="w-10 h-10 text-midnight dark:text-cream" />
              <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider">
                {t("vision.title")}
              </h2>
            </div>
            <p className="font-sans text-lg text-midnight/95 dark:text-cream/90 leading-relaxed space-y-4">
              <span className="block">{t("vision.p1")}</span>
              <span className="block mt-4 text-amber/90 font-medium">
                {t("t0")}
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
