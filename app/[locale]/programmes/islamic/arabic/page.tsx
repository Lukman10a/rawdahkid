"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  LayoutList,
  BookText,
  Speech,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ArabicProgramme() {
  const t = useTranslations("ProgArabic");
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
              منهج تعليم اللغة العربية
            </p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6 flex flex-wrap justify-center gap-2">
              <span>{t("hero.subtitle1")}</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>{t("hero.subtitle2")}</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>{t("hero.subtitle3")}</span>
              <span className="hidden sm:inline">&nbsp;•&nbsp;</span>
              <span>{t("hero.subtitle4")}</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              {t("t9")}
            </p>

            {/* Path visualization */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-12 text-sm font-cinzel font-bold text-midnight/70 dark:text-cream/70">
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                {t("t31")}
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                {t("t32")}
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                {t("t35")}
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                {t("t33")}
              </span>
              <span className="text-gold">→</span>
              <span className="px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
                {t("t41")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & RESOURCES */}
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
              <p>{t("t2")}</p>
              <p className="font-semibold text-midnight dark:text-cream italic border-s-4 border-gold ps-4 py-1">
                {t("t3")}
              </p>
            </div>
          </motion.div>

          {/* Key Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <BookText className="w-7 h-7 text-gold" />
              {t("resources.title")}
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: t("resources.r1.title"),
                  desc: t("resources.r1.desc"),
                },
                {
                  title: t("resources.r2.title"),
                  desc: t("resources.r2.desc"),
                },
                {
                  title: t("resources.r3.title"),
                  desc: t("resources.r3.desc"),
                },
                {
                  title: t("resources.r4.title"),
                  desc: t("resources.r4.desc"),
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="font-cinzel font-bold text-midnight dark:text-cream block mb-1">
                      {resource.title}
                    </span>
                    <span className="font-sans text-sm text-midnight/70 dark:text-cream/70 leading-relaxed">
                      {resource.desc}
                    </span>
                  </div>
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
            <table className="w-full text-start border-collapse min-w-200">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg w-20">
                    {t("t44")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-64">
                    {t("t28")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">
                    {t("t39")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("t15")}
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    1
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t21")}
                  </td>
                  <td className="py-4 px-6">{t("t40")}</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {t("t8")}
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    2
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t30")}
                  </td>
                  <td className="py-4 px-6">{t("t40")}</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {t("t10")}
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    3
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t25")}
                  </td>
                  <td className="py-4 px-6">{t("t40")}</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {t("t6")}
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    4
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t22")}
                  </td>
                  <td className="py-4 px-6">{t("t40")}</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {t("t7")}
                  </td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-bold font-cinzel text-xl text-center">
                    5
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t23")}
                  </td>
                  <td className="py-4 px-6">{t("t40")}</td>
                  <td className="py-4 px-6 leading-relaxed text-sm">
                    {t("t5")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. DETAILED COURSE OUTLINES */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
            {t("t24")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* LEVEL 1 */}
          <LevelCard
            levelNumber="1"
            title={t("t21")}
            arabicTitle="القاعدة النورانية"
            subtitle={t("level1.subtitle")}
            resource={t("level1.resource")}
            duration={t("t40")}
            frequency={t("level1.freq")}
            aim={t("level1.aim")}
            listTitle={t("level1.listTitle")}
            listItems={[
              t("level1.i1"),
              t("level1.i2"),
              t("level1.i3"),
              t("level1.i4"),
              t("level1.i5"),
              t("level1.i6"),
              t("level1.i7"),
              t("level1.i8"),
              t("level1.i9"),
              t("level1.i10"),
              t("level1.i11"),
              t("level1.i12"),
            ]}
          />

          {/* LEVEL 2 */}
          <LevelCard
            levelNumber="2"
            title={t("t30")}
            arabicTitle="نور البيان"
            subtitle={t("level2.subtitle")}
            resource={t("level2.resource")}
            duration={t("t40")}
            frequency={t("level2.freq")}
            aim={t("level2.aim")}
            listTitle={t("level2.listTitle")}
            listItems={[
              t("level2.i1"),
              t("level2.i2"),
              t("level2.i3"),
              t("level2.i4"),
              t("level2.i5"),
              t("level2.i6"),
              t("level2.i7"),
              t("level2.i8"),
              t("level2.i9"),
              t("level2.i10"),
              t("level2.i11"),
              t("level2.i12"),
            ]}
          />

          {/* LEVEL 3 */}
          <LevelCard
            levelNumber="3"
            title={t("t19")}
            arabicTitle="المحادثة العربية الأساسية"
            subtitle={t("level3.subtitle")}
            resource={t("level3.resource")}
            duration={t("t40")}
            frequency={t("level3.freq")}
            aim={t("level3.aim")}
            icon={<Speech className="w-5 h-5 text-gold" />}
            listTitle={t("level3.listTitle")}
            listItems={[
              t("level3.i1"),
              t("level3.i2"),
              t("level3.i3"),
              t("level3.i4"),
              t("level3.i5"),
              t("level3.i6"),
              t("level3.i7"),
              t("level3.i8"),
              t("level3.i9"),
              t("level3.i10"),
              t("level3.i11"),
              t("level3.i12"),
              t("level3.i13"),
              t("level3.i14"),
              t("level3.i15"),
            ]}
          />

          {/* LEVEL 4 */}
          <LevelCard
            levelNumber="4"
            title={t("t22")}
            arabicTitle="كتاب المدينة — الكتاب الأول"
            subtitle={t("level4.subtitle")}
            resource={t("level4.resource")}
            duration={t("t40")}
            frequency={t("level4.freq")}
            aim={t("level4.aim")}
            listTitle={t("level4.listTitle")}
            listItems={[
              t("level4.i1"),
              t("level4.i2"),
              t("level4.i3"),
              t("level4.i4"),
              t("level4.i5"),
              t("level4.i6"),
              t("level4.i7"),
              t("level4.i8"),
              t("level4.i9"),
              t("level4.i10"),
              t("level4.i11"),
              t("level4.i12"),
              t("level4.i13"),
              t("level4.i14"),
              t("level4.i15"),
            ]}
          />

          {/* LEVEL 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white/50 dark:bg-navy/20 border border-gold/40 shadow-lg rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-0 inset-e-0 p-8 opacity-10 pointer-events-none">
              <BookText className="w-48 h-48 text-gold" />
            </div>

            <div className="bg-linear-to-br from-midnight to-navy border-b border-gold/30 p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    {t("t27")}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
                    {t("t23")}
                  </h3>
                  <p className="font-sans text-cream/70 text-sm md:text-base">
                    {t("t13")}
                  </p>
                </div>
                <div className="font-amiri text-2xl md:text-3xl text-gold/90 text-end">
                  كتاب المدينة — الكتاب الثاني
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
                <div>
                  <strong className="text-white">{t("t36")}</strong>
                  {t("t40")}
                </div>
                <div>
                  <strong className="text-white">{t("t37")}</strong>
                  {t("t11")}
                </div>
              </div>
              <div className="text-sm text-cream/80 leading-relaxed">
                <strong className="text-white block mb-1">{t("t43")}</strong>
                {t("t1")}
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white dark:bg-transparent relative z-10">
              <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
                <LayoutList className="w-5 h-5 text-gold" />
                {t("t12")}
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                  t("level5.i1"),
                  t("level5.i2"),
                  t("level5.i3"),
                  t("level5.i4"),
                  t("level5.i5"),
                  t("level5.i6"),
                  t("level5.i7"),
                  t("level5.i8"),
                  t("level5.i9"),
                  t("level5.i10"),
                  t("level5.i11"),
                  t("level5.i12"),
                  t("level5.i13"),
                  t("level5.i14"),
                ].map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
                  >
                    <span className="flex items-center justify-center min-w-6 h-6 rounded-md bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 text-midnight dark:text-cream text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                      {idx + 1}
                    </span>
                    <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 pt-0.5">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-ivory dark:bg-midnight p-6 rounded-md border border-midnight/10 dark:border-white/10 text-center space-y-4">
                <h5 className="font-cinzel font-bold text-midnight dark:text-cream text-lg">
                  {t("t29")}
                </h5>
                <p className="font-sans text-midnight/80 dark:text-cream/80 text-sm max-w-2xl mx-auto leading-relaxed">
                  {t("t0")}
                </p>
                <p className="font-amiri text-gold text-lg italic tracking-widest pt-2">
                  وما توفيقي إلا بالله — عليه توكلت وإليه أنيب
                </p>
              </div>
            </div>
          </motion.div>
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
            {t("t4")}
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              {t("t18")}
            </h3>
            <div className="font-cormorant text-5xl text-gold mb-6">
              $800{" "}
              <span className="text-xl text-midnight/60 dark:text-cream/60 font-sans">
                {t("t42")}
              </span>
            </div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t26")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t17")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t20")}
                </span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">
                {t("t38")}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/islamic"
              className="text-gold hover:text-amber transition-colors font-sans underline underline-offset-4"
            >
              {t("t16")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Levels 1–4
function LevelCard({
  levelNumber,
  title,
  arabicTitle,
  subtitle,
  resource,
  duration,
  frequency,
  aim,
  listTitle,
  listItems,
  icon,
}: {
  levelNumber: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  resource: string;
  duration: string;
  frequency: string;
  aim: string;
  listTitle: string;
  listItems: string[];
  icon?: React.ReactNode;
}) {
  const t = useTranslations("ProgArabic");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              {t("levelLabel")} {levelNumber} — {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm">
              {t("resourceLabel")}{" "}
              <span className="font-semibold text-cream/90">{resource}</span>
            </p>
          </div>
          <div className="font-amiri text-3xl text-gold/90 md:text-end">
            {arabicTitle}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t36")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t34")}</strong> {frequency}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">{t("t43")}</strong> {aim}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
          {icon ? icon : <LayoutList className="w-5 h-5 text-gold" />}{" "}
          {listTitle}
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {listItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
