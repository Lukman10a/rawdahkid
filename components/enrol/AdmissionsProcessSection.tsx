"use client";

import { motion } from "framer-motion";
import { ClipboardList, MailCheck, GraduationCap } from "lucide-react";
import type { EnrolTranslate } from "@/components/enrol/types";

type AdmissionsProcessSectionProps = {
  t: EnrolTranslate;
  tUnsafe: EnrolTranslate;
};

export function AdmissionsProcessSection({
  t,
  tUnsafe,
}: AdmissionsProcessSectionProps) {
  return (
    <>
      <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
            {t("header.title")}
          </h1>
          <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
            {t("header.desc")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-midnight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
              {t("process.title")}
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 inset-s-[16%] inset-e-[16%] h-px bg-gold/30"></div>

            {[
              {
                icon: ClipboardList,
                key: "s1",
              },
              {
                icon: MailCheck,
                key: "s2",
              },
              {
                icon: GraduationCap,
                key: "s3",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-white dark:bg-navy border border-midnight/5 dark:border-white/5 p-8 rounded-sm shadow-xl text-center z-10 group hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 bg-ivory dark:bg-midnight text-gold mx-auto rounded-full flex items-center justify-center mb-6 border-4 border-white dark:border-navy shadow-md group-hover:scale-110 transition-transform">
                  <s.icon className="w-8 h-8" />
                </div>
                <div className="font-cinzel text-sm text-gold tracking-widest uppercase mb-2">
                  {tUnsafe(`process.steps.${s.key}.step`)}
                </div>
                <h3 className="font-playfair text-xl text-midnight dark:text-cream mb-4">
                  {tUnsafe(`process.steps.${s.key}.title`)}
                </h3>
                <p className="font-sans text-midnight/70 dark:text-cream/70 text-sm leading-relaxed">
                  {tUnsafe(`process.steps.${s.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
