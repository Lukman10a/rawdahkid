"use client";

import { motion } from "framer-motion";
import {
  Atom,
  CheckCircle,
  GraduationCap,
  Compass,
  Microscope,
  TestTube,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

export default function SciencesProgramme() {
  const t = useTranslations("ProgSciences");

  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full mb-6">
              <Atom className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              {t("t0")}
            </h1>
            <h2 className="font-sans text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6 font-semibold">
              {t("t1")}
            </h2>

            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-8 flex flex-wrap justify-center gap-2">
              <span>{t("t2")}</span>
              <span className="hidden sm:inline">{t("t3")}</span>
              <span>{t("t4")}</span>
              <span className="hidden sm:inline">{t("t3")}</span>
              <span>{t("t6")}</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              {t("t7")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & RESOURCES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <Compass className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              {t("t8")}
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>{t("t9")}</p>
              <p>{t("t10")}</p>
              <p className="font-semibold text-midnight dark:text-cream italic border-s-4 border-emerald-600 dark:border-emerald-400 ps-4 py-1">
                {t("t11")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <Microscope className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              {t("t12")}
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: t("t68"),
                  desc: t("t53"),
                },
                {
                  title: t("t66"),
                  desc: t("t55"),
                },
                {
                  title: t("t67"),
                  desc: t("t54"),
                },
                {
                  title: t("t69"),
                  desc: t("t56"),
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
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
      <section className="py-20 bg-emerald-50/50 dark:bg-emerald-900/10 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              {t("t13")}
            </h2>
            <div className="w-24 h-px bg-emerald-600/50 dark:bg-emerald-400/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse min-w-200">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-emerald-700 dark:text-emerald-400 text-lg w-20">
                    {t("t14")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">
                    {t("t15")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("t16")}
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                {[
                  {
                    lvl: "1",
                    age: "6–7",
                    focus: t("t60"),
                  },
                  {
                    lvl: "2",
                    age: "7–8",
                    focus: t("t58"),
                  },
                  {
                    lvl: "3",
                    age: "8–9",
                    focus: t("t64"),
                  },
                  {
                    lvl: "4",
                    age: "9–10",
                    focus: t("t62"),
                  },
                  {
                    lvl: "5",
                    age: "10–11",
                    focus: t("t65"),
                  },
                  {
                    lvl: "6",
                    age: "11–12",
                    focus: t("t59"),
                  },
                  {
                    lvl: "7",
                    age: "12–13",
                    focus: t("t57"),
                  },
                  {
                    lvl: "8",
                    age: "13–14",
                    focus: t("t63"),
                  },
                  {
                    lvl: "9",
                    age: "14–15",
                    focus: t("t35"),
                  },
                  {
                    lvl: "10",
                    age: "15–16",
                    focus: t("t61"),
                  },
                ].map((row, i) => (
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

      {/* 4. DETAILED COURSE OUTLINES */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
            {t("t17")}
          </h2>
          <div className="w-24 h-px bg-emerald-600/50 dark:bg-emerald-400/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <LevelCard
            levelNumber="1"
            title={t("t36")}
            subtitle={t("t44")}
            ageGroup="Ages 6–7 | NGSS Kindergarten–Grade 1"
            duration="36 Weeks | 2–3 Sessions/Week | 40 Min/Session"
            aim="To develop curiosity about the natural world through observation, questioning, and hands-on exploration of weather, plants, animals, and materials."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${1}.u${j + 1}.t`),
              duration: t(`lvl${1}.u${j + 1}.d`),
              skills: t(`lvl${1}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="2"
            title={t("t41")}
            subtitle={t("t45")}
            ageGroup="Ages 7–8 | NGSS Grade 2"
            duration="36 Weeks | 2–3 Sessions/Week | 40 Min/Session"
            aim="To investigate life cycles, properties of matter, Earth materials, and the engineering design process through inquiry-based learning."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${2}.u${j + 1}.t`),
              duration: t(`lvl${2}.u${j + 1}.d`),
              skills: t(`lvl${2}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="3"
            title={t("t37")}
            subtitle={t("t46")}
            ageGroup="Ages 8–9 | NGSS Grade 3"
            duration="36 Weeks | 2–3 Sessions/Week | 45 Min/Session"
            aim="To investigate forces, traits and inheritance, fossils, ecosystems, and climate patterns through structured scientific inquiry."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${3}.u${j + 1}.t`),
              duration: t(`lvl${3}.u${j + 1}.d`),
              skills: t(`lvl${3}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="4"
            title={t("t42")}
            subtitle={t("t47")}
            ageGroup="Ages 9–10 | NGSS Grade 4"
            duration="36 Weeks | 2–3 Sessions/Week | 45 Min/Session"
            aim="To study energy transfer, wave behaviour, Earth's geological history, and plant and animal internal structures."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${4}.u${j + 1}.t`),
              duration: t(`lvl${4}.u${j + 1}.d`),
              skills: t(`lvl${4}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="5"
            title={t("t38")}
            subtitle={t("t48")}
            ageGroup="Ages 10–11 | NGSS Grade 5"
            duration="36 Weeks | 2–3 Sessions/Week | 50 Min/Session"
            aim="To study matter at the atomic level, Earth's systems, the solar system, and human body systems — preparing students for secondary science."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${5}.u${j + 1}.t`),
              duration: t(`lvl${5}.u${j + 1}.d`),
              skills: t(`lvl${5}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="6"
            title={t("t34")}
            subtitle={t("t49")}
            ageGroup="Ages 11–12 | Lower Secondary Science"
            duration="36 Weeks | 3 Sessions/Week | 50 Min/Session"
            aim="To introduce cell biology, foundational chemistry, Earth structure, and begin the transition to disciplinary science study."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${6}.u${j + 1}.t`),
              duration: t(`lvl${6}.u${j + 1}.d`),
              skills: t(`lvl${6}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="7"
            title={t("t39")}
            subtitle={t("t50")}
            ageGroup="Ages 12–13 | Lower Secondary Science"
            duration="36 Weeks | 3 Sessions/Week | 55 Min/Session"
            aim="To study fundamental biology, physics, and chemistry in a structured, discipline-aware manner, building towards GCSE/IGCSE-level work."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${7}.u${j + 1}.t`),
              duration: t(`lvl${7}.u${j + 1}.d`),
              skills: t(`lvl${7}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="8"
            title={t("t32")}
            subtitle={t("t51")}
            ageGroup="Ages 13–14 | GCSE/IGCSE Foundation"
            duration="36 Weeks | 3 Sessions/Week | 55 Min/Session"
            aim="To advance in all three sciences at GCSE/IGCSE foundation level, developing the analytical skills needed for formal examinations."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${8}.u${j + 1}.t`),
              duration: t(`lvl${8}.u${j + 1}.d`),
              skills: t(`lvl${8}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="9"
            title={t("t35")}
            subtitle={t("t52")}
            ageGroup="Ages 14–15 | GCSE/IGCSE Year 1"
            duration="36 Weeks | 3 Sessions/Week | 60 Min/Session"
            aim="To complete GCSE/IGCSE core content across all three sciences, developing exam skills, required practicals, and scientific communication."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${9}.u${j + 1}.t`),
              duration: t(`lvl${9}.u${j + 1}.d`),
              skills: t(`lvl${9}.u${j + 1}.s`),
            }))}
          />

          <LevelCard
            levelNumber="10"
            title={t("t33")}
            subtitle={t("t43")}
            ageGroup="Ages 15–16 | GCSE/IGCSE Year 2 & Beyond"
            duration="36 Weeks | 3 Sessions/Week | 60 Min/Session"
            aim="To complete GCSE/IGCSE preparation, master all required content, and introduce students to A-Level/pre-university science thinking."
            units={Array.from({ length: 8 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl${10}.u${j + 1}.t`),
              duration: t(`lvl${10}.u${j + 1}.d`),
              skills: t(`lvl${10}.u${j + 1}.s`),
            }))}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            {t("t18")}
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            {t("t19")}
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-emerald-600/30 dark:border-emerald-400/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              {t("t20")}
            </h3>
            <div className="font-cormorant text-5xl text-emerald-600 dark:text-emerald-400 mb-6">
              {t("t21")}
            </div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t22")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t23")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t24")}
                </span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">
                {t("t25")}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/western"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-sans underline underline-offset-4"
            >
              {t("t26")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Sciences
function LevelCard({
  levelNumber,
  title,
  subtitle,
  ageGroup,
  duration,
  aim,
  units,
}: {
  levelNumber: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  duration: string;
  aim: string;
  units: { no: number; topic: string; duration: string; skills: string }[];
}) {
  const t = useTranslations("ProgSciences");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-emerald-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-emerald-400 dark:text-emerald-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              LEVEL {levelNumber} — {subtitle}
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70 text-sm font-semibold">
              {ageGroup}
            </p>
          </div>
          <div className="md:text-end">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-emerald-400">
              <TestTube className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t27")}</strong> {duration}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">{t("t28")}</strong> {aim}
        </div>
      </div>

      <div className="p-0 bg-white dark:bg-transparent">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-200">
            <thead>
              <tr className="border-b-2 border-emerald-100 dark:border-white/10 bg-emerald-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-emerald-700 dark:text-emerald-400 font-bold w-16 text-center">
                  {t("unitLabel")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/4">
                  {t("topicLabel")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/5 whitespace-nowrap">
                  {t("durationLabel")}
                </th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold">
                  {t("skillsLabel")}
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80 text-sm">
              {units.map((unit, idx) => (
                <tr
                  key={idx}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-center text-emerald-600 dark:text-emerald-400">
                    {unit.no}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {unit.topic}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">
                    {unit.duration}
                  </td>
                  <td className="py-4 px-6 leading-relaxed">{unit.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
