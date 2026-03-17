"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

export function KnowledgeHubHeroSection() {
  const t = useTranslations("KnowledgeHub");

  return (
    <section className="relative py-24 md:py-32 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream overflow-hidden border-b border-midnight/5 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 opacity-[0.03] text-gold pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="islamic-pattern-hub"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0 L60 30 L30 60 L0 30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="30"
                cy="30"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern-hub)" />
        </svg>
      </div>

      <div className="absolute -top-10 -left-10 text-gold/5 overflow-hidden pointer-events-none">
        <BookOpen size={400} strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-cinzel text-5xl md:text-7xl tracking-widest mb-8 uppercase text-midnight dark:text-cream drop-shadow-sm">
            {t("title")}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gold w-16 md:w-32 opacity-60"></div>
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
            <div className="h-px bg-gold w-16 md:w-32 opacity-60"></div>
          </div>

          <p className="font-cormorant italic text-2xl md:text-3xl text-midnight/80 dark:text-amber/80 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
