"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useTranslations } from "next-intl";

export function PhilosophySection() {
  const t = useTranslations("About");

  return (
    <section className="py-24 bg-white dark:bg-navy text-midnight dark:text-cream border-y border-midnight/ dark:border-white/">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-cinzel text-sm text-gold tracking-[0.2em] uppercase mb-4">
                {t("philosophy.subtitle")}
              </h2>
              <h3 className="font-playfair text-4xl md:text-5xl leading-tight">
                {t("philosophy.title")}
              </h3>
            </div>

            <div className="w-20 h-px bg-gold/50"></div>

            <div className="font-sans text-midnight/ dark:text-cream/ text-lg leading-relaxed space-y-6">
              <p>{t("philosophy.p1")}</p>
              <p>
                At{" "}
                <strong className="text-amber font-medium tracking-wide">
                  {t("philosophy.p2_bold")}
                </strong>
                {t("philosophy.p2_suffix")}
              </p>
              <p>{t("philosophy.p3")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-125 w-full bg-warm dark:bg-deep rounded-sm border border-gold/20 overflow-hidden flex items-center justify-center group"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-gold/40 via-midnight to-ivory dark:to-midnight"></div>

            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="absolute inset-s-1/2 -ms-32 w-64 h-64 border border-gold/30 rounded-full flex items-center justify-start ps-8 transition-transform duration-700 group-hover:-translate-x-8 rtl:group-hover:translate-x-8">
                <span className="font-amiri text-4xl text-amber drop-shadow-md">
                  {t("philosophy.deen")}
                </span>
              </div>
              <div className="absolute inset-e-1/2 -me-32 w-64 h-64 border border-midnight/30 dark:border-white/30 rounded-full flex items-center justify-end pe-8 transition-transform duration-700 group-hover:translate-x-8 rtl:group-hover:-translate-x-8">
                <span className="font-cinzel text-xl text-midnight dark:text-cream tracking-widest drop-shadow-md">
                  {t("philosophy.duniya")}
                </span>
              </div>
              <div className="z-20 w-32 h-32 bg-ivory dark:bg-midnight border-2 border-gold rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-transform duration-700 group-hover:scale-105">
                <Award className="w-12 h-12 text-gold" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
