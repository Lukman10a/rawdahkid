"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Calendar, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function QuranMemorisation() {
  const t = useTranslations("ProgQuran");
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-amiri text-gold text-2xl md:text-3xl mb-4">
              بسم الله الرحمان الرحيم
            </p>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              {t("hero.title")}
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">
              برنامج حفظ القرآن الكريم
            </p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6">
              <span dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }} />
            </div>

            <div className="inline-flex items-center gap-4 bg-white/50 dark:bg-navy/50 px-6 py-3 rounded-full border border-midnight/5 dark:border-white/5 mb-8">
              <span className="font-amiri text-xl">{t("t22")}</span>
              <span className="text-gold">⟶</span>
              <span className="font-amiri text-xl">{t("t20")}</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
              {t("hero.quote")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & PRINCIPLES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-gold" />
              {t("overview.title")}
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>{t("overview.p1")}</p>
              <p>{t("overview.p2")}</p>
              <p>{t("overview.p3")}</p>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6">
              {t("principles.title")}
            </h2>
            <ul className="space-y-5">
              {[
                { key: "p1", txt: t("principlesList.p1") },
                { key: "p2", txt: t("principlesList.p2") },
                { key: "p3", txt: t("principlesList.p3") },
                { key: "p4", txt: t("principlesList.p4") },
                { key: "p5", txt: t("principlesList.p5") },
              ].map((principle) => (
                <li key={principle.key} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <span className="font-sans text-midnight/80 dark:text-cream/80">
                    {principle.txt}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. AT A GLANCE */}
      <section className="py-20 bg-warm/30 dark:bg-deep/30 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              {t("glance.title")}
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg">
                    {t("glance.h_term")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("glance.h_range")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("glance.h_surahs")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("glance.h_weeks")}
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">
                    {t("glance.term1")}
                  </td>
                  <td className="py-4 px-6">{t("t4")}</td>
                  <td className="py-4 px-6">{t("t26")}</td>
                  <td className="py-4 px-6">{t("glance.w8")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">
                    {t("glance.term2")}
                  </td>
                  <td className="py-4 px-6">{t("t5")}</td>
                  <td className="py-4 px-6">{t("t27")}</td>
                  <td className="py-4 px-6">{t("glance.w8")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">
                    {t("glance.term3")}
                  </td>
                  <td className="py-4 px-6">{t("t3")}</td>
                  <td className="py-4 px-6">{t("t30")}</td>
                  <td className="py-4 px-6">{t("glance.w8")}</td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">
                    {t("glance.term4")}
                  </td>
                  <td className="py-4 px-6">{t("t6")}</td>
                  <td className="py-4 px-6">{t("t31")}</td>
                  <td className="py-4 px-6">{t("glance.w8")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Color Key */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-white dark:bg-navy border border-midnight/10 dark:border-white/10"></div>
              <span className="font-sans text-sm text-midnight/70 dark:text-muted">
                {t("t8")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-green-500/20 border border-green-500/30"></div>
              <span className="font-sans text-sm text-midnight/70 dark:text-muted">
                {t("t10")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-amber-500/20 border border-amber-500/30"></div>
              <span className="font-sans text-sm text-midnight/70 dark:text-muted">
                {t("t9")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED TERM PLANS */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
            {t("t21")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* TERM 1 */}
          <TermCard
            number="1"
            title={t("t13")}
            subtitle={t("term1.subtitle")}
            arabic={t("term1.arabic")}
            totalSurahs={t("t26")}
            duration={t("term1.duration")}
            structure={t("term1.structure")}
            objective={t("term1.objective")}
            weeks={[
              { w: 1, type: "memo", content: t("term1.w1") },
              { w: 2, type: "memo", content: t("term1.w2") },
              { w: 3, type: "memo", content: t("term1.w3") },
              { w: 4, type: "memo", content: t("term1.w4") },
              { w: 5, type: "rev", content: t("term1.w5") },
              { w: 6, type: "memo", content: t("term1.w6") },
              { w: 7, type: "memo", content: t("term1.w7") },
              { w: 8, type: "exam", content: t("term1.w8") },
            ]}
          />

          {/* TERM 2 */}
          <TermCard
            number="2"
            title={t("t11")}
            subtitle={t("term2.subtitle")}
            arabic={t("term2.arabic")}
            totalSurahs={t("t27")}
            duration={t("term2.duration")}
            structure={t("term2.structure")}
            objective={t("term2.objective")}
            weeks={[
              { w: 1, type: "memo", content: t("term2.w1") },
              { w: 2, type: "memo", content: t("term2.w2") },
              { w: 3, type: "memo", content: t("term2.w3") },
              { w: 4, type: "memo", content: t("term2.w4") },
              { w: 5, type: "rev", content: t("term2.w5") },
              { w: 6, type: "memo", content: t("term2.w6") },
              { w: 7, type: "memo", content: t("term2.w7") },
              { w: 8, type: "exam", content: t("term2.w8") },
            ]}
          />

          {/* TERM 3 */}
          <TermCard
            number="3"
            title={t("t7")}
            subtitle={t("term3.subtitle")}
            arabic={t("term3.arabic")}
            totalSurahs={t("t30")}
            duration={t("term3.duration")}
            structure={t("term3.structure")}
            objective={t("term3.objective")}
            note={t("term3.note")}
            weeks={[
              { w: 1, type: "memo", content: t("term3.w1") },
              { w: 2, type: "memo", content: t("term3.w2") },
              { w: 3, type: "memo", content: t("term3.w3") },
              { w: 4, type: "memo", content: t("term3.w4") },
              { w: 5, type: "rev", content: t("term3.w5") },
              { w: 6, type: "memo", content: t("term3.w6") },
              { w: 7, type: "memo", content: t("term3.w7") },
              { w: 8, type: "exam", content: t("term3.w8") },
            ]}
          />

          {/* TERM 4 */}
          <TermCard
            number="4"
            title={t("t12")}
            subtitle={t("term4.subtitle")}
            arabic={t("term4.arabic")}
            totalSurahs={t("t31")}
            duration={t("term4.duration")}
            structure={t("term4.structure")}
            objective={t("term4.objective")}
            note={t("term4.note")}
            weeks={[
              { w: 1, type: "memo", content: t("term4.w1") },
              { w: 2, type: "memo", content: t("term4.w2") },
              { w: 3, type: "memo", content: t("term4.w3") },
              { w: 4, type: "memo", content: t("term4.w4") },
              { w: 5, type: "memo", content: t("term4.w5") },
              { w: 6, type: "memo", content: t("term4.w6") },
              { w: 7, type: "memo", content: t("term4.w7") },
              { w: 8, type: "exam", content: t("term4.w8") },
            ]}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            {t("t14")}
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            {t("t2")}
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              {t("t23")}
            </h3>
            <div className="font-cormorant text-5xl text-gold mb-6">
              $800{" "}
              <span className="text-xl text-midnight/60 dark:text-cream/60 font-sans">
                {t("t33")}
              </span>
            </div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t19")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t16")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t18")}
                </span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">
                {t("t28")}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/islamic"
              className="text-gold hover:text-amber transition-colors font-sans underline underline-offset-4"
            >
              {t("t15")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for Term tables
function TermCard({
  number,
  title,
  subtitle,
  arabic,
  totalSurahs,
  duration,
  structure,
  objective,
  note,
  weeks,
}: {
  number: string;
  title: string;
  subtitle: string;
  arabic: string;
  totalSurahs: string;
  duration: string;
  structure: string;
  objective: string;
  note?: string;
  weeks: { w: number; type: string; content: string }[];
}) {
  const t = useTranslations("ProgQuran");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
              {t("termLabel")} {number}
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70">{subtitle}</p>
          </div>
          <div className="font-amiri text-3xl md:text-4xl text-gold/90 text-end">
            {arabic}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80">
          <div>
            <strong className="text-white">{t("t29")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t32")}</strong> {totalSurahs}
          </div>
          <div className="md:col-span-2">
            <strong className="text-white">{t("t24")}</strong> {structure}
          </div>
          <div className="md:col-span-2">
            <strong className="text-white">{t("t25")}</strong> {objective}
          </div>
          {note && (
            <div className="md:col-span-2 text-gold italic">
              <strong className="text-white not-italic">{t("t34")}</strong>{" "}
              {note}
            </div>
          )}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gold" />
          {t("t17")}
        </h4>
        <div className="space-y-3">
          {weeks.map((week, idx) => {
            const isRev = week.type === "rev";
            const isExam = week.type === "exam";

            let bgClass = "bg-ivory dark:bg-midnight";
            let borderClass = "border-midnight/5 dark:border-white/5";
            let typeLabel = t("typeLabels.memo");
            let iconColor = "text-gold";

            if (isRev) {
              bgClass = "bg-green-500/10 dark:bg-green-500/10";
              borderClass = "border-green-500/20";
              typeLabel = t("typeLabels.rev");
              iconColor = "text-green-600 dark:text-green-400";
            } else if (isExam) {
              bgClass = "bg-amber-500/10 dark:bg-amber-500/10";
              borderClass = "border-amber-500/20";
              typeLabel = t("typeLabels.exam");
              iconColor = "text-amber-600 dark:text-amber-400";
            }

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center p-4 border rounded-md ${bgClass} ${borderClass}`}
              >
                <div className="flex items-center sm:w-1/3 mb-2 sm:mb-0">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-navy flex items-center justify-center font-bold font-cinzel text-midnight dark:text-cream shadow-xs me-4 shrink-0 border border-midnight/5 dark:border-white/5">
                    {week.w}
                  </div>
                  <span
                    className={`font-cinzel text-sm md:text-base font-semibold tracking-wider uppercase ${iconColor}`}
                  >
                    {typeLabel}
                  </span>
                </div>
                <div className="sm:w-2/3 font-sans text-midnight/80 dark:text-cream border-s sm:border-midnight/10 sm:dark:border-white/10 sm:ps-4 ps-12 sm:ms-0">
                  {week.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
