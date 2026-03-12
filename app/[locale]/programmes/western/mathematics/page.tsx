"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle,
  GraduationCap,
  Compass,
  Sigma,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

export default function MathematicsProgramme() {
  const t = useTranslations("ProgMathematics");

  return (
    <div className="flex flex-col min-h-screen w-full min-w-0 overflow-x-hidden max-w-full ">
      {/* 1. HERO SECTION */}
      <section className="w-full min-w-0 relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full mb-6">
              <Sigma className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">{t("t0")}</h1>
            <h2 className="font-sans text-xl md:text-2xl text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 font-semibold">{t("t1")}</h2>

            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-8 flex flex-wrap justify-center gap-2">
              <span>{t("t2")}</span>
              <span className="hidden sm:inline">{t("t3")}</span>
              <span>{t("t4")}</span>
              <span className="hidden sm:inline">{t("t3")}</span>
              <span>{t("t6")}</span>
              <span className="hidden sm:inline">{t("t3")}</span>
              <span>{t("t8")}</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">{t("t9")}</p>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & RESOURCES */}
      <section className="w-full min-w-0 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cinzel text-3xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />{t("t10")}</h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>{t("t11")}</p>
              <p>{t("t12")}</p>
              <p className="font-semibold text-midnight dark:text-cream italic border-s-4 border-blue-600 dark:border-blue-400 ps-4 py-1">{t("t13")}</p>
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
              <Calculator className="w-7 h-7 text-blue-600 dark:text-blue-400" />{t("t14")}</h2>
            <ul className="space-y-6">
              {[
                {
                  title: t("t59"),
                  desc: t("t45"),
                },
                {
                  title: t("t53"),
                  desc: t("t44"),
                },
                {
                  title: t("t57"),
                  desc: t("t47"),
                },
                {
                  title: t("t60"),
                  desc: t("t46"),
                },
              ].map((resource, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
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
      <section className="w-full min-w-0 py-20 bg-blue-50/50 dark:bg-blue-900/10 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">{t("t15")}</h2>
            <div className="w-24 h-px bg-blue-600/50 dark:bg-blue-400/50 mx-auto"></div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-start border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-blue-700 dark:text-blue-400 text-lg w-20">{t("t16")}</th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg w-32">{t("t17")}</th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">{t("t18")}</th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                {[
                  { lvl: "1", age: "3–6", focus: t("t54") },
                  {
                    lvl: "2",
                    age: "6–7",
                    focus: t("t50"),
                  },
                  {
                    lvl: "3",
                    age: "7–8",
                    focus: t("t48"),
                  },
                  {
                    lvl: "4",
                    age: "8–9",
                    focus: t("t55"),
                  },
                  {
                    lvl: "5",
                    age: "9–10",
                    focus: t("t51"),
                  },
                  { lvl: "6", age: "10–11", focus: t("t61") },
                  {
                    lvl: "7",
                    age: "11–12",
                    focus: t("t52"),
                  },
                  { lvl: "8", age: "12–13", focus: t("t58") },
                  {
                    lvl: "9",
                    age: "13–14",
                    focus: t("t56"),
                  },
                  {
                    lvl: "10",
                    age: "14–15",
                    focus: t("t49"),
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
      <section className="w-full min-w-0 py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">{t("t19")}</h2>
          <div className="w-24 h-px bg-blue-600/50 dark:bg-blue-400/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <LevelCard
            levelNumber="1"
            title={t("t40")}
            subtitle="Kindergarten"
            ageGroup="Ages 3–6 | Early Years Foundation"
            duration="36 Weeks | 4–5 Sessions/Week | 40 Min/Session"
            aim="To build solid number sense, addition and subtraction fluency within 20, understand shapes, and develop early problem-solving and measurement skills based on standard Go Math pacing."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl1.u${j + 1}.t`),
              duration: t(`lvl1.u${j + 1}.d`),
              skills: t(`lvl1.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="2"
            title={t("t43")}
            subtitle="Grade 1"
            ageGroup="Ages 6–7 | Grade 1"
            duration="36 Weeks | 4–5 Sessions/Week | 40 Min/Session"
            aim="To master addition and subtraction to 1,000, introduce multiplication and division concepts, and strengthen fractions and measurement."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl2.u${j + 1}.t`),
              duration: t(`lvl2.u${j + 1}.d`),
              skills: t(`lvl2.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="3"
            title={t("t37")}
            subtitle="Grade 2"
            ageGroup="Ages 7–8 | Grade 2"
            duration="36 Weeks | 4–5 Sessions/Week | 45 Min/Session"
            aim="To achieve fluency in multiplication and division facts to 12, introduce fractions on a number line, and develop multi-step problem solving."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl3.u${j + 1}.t`),
              duration: t(`lvl3.u${j + 1}.d`),
              skills: t(`lvl3.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="4"
            title={t("t36")}
            subtitle="Grade 3"
            ageGroup="Ages 8–9 | Grade 3"
            duration="36 Weeks | 4–5 Sessions/Week | 45 Min/Session"
            aim="To master multi-digit multiplication and division, build fraction arithmetic, and introduce algebraic thinking and geometry."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl4.u${j + 1}.t`),
              duration: t(`lvl4.u${j + 1}.d`),
              skills: t(`lvl4.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="5"
            title={t("t38")}
            subtitle="Grade 4"
            ageGroup="Ages 9–10 | Grade 4"
            duration="36 Weeks | 4–5 Sessions/Week | 50 Min/Session"
            aim="To master fraction and decimal operations, introduce ratios, percentages, integers, and lay groundwork for algebra and coordinate geometry."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl5.u${j + 1}.t`),
              duration: t(`lvl5.u${j + 1}.d`),
              skills: t(`lvl5.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="6"
            title={t("t39")}
            subtitle="Grade 5"
            ageGroup="Ages 10–11 | Grade 5"
            duration="36 Weeks | 4–5 Sessions/Week | 50 Min/Session"
            aim="To develop strong algebraic thinking, master ratio and proportional relationships, explore statistics, and transition confidently into formal algebra."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl6.u${j + 1}.t`),
              duration: t(`lvl6.u${j + 1}.d`),
              skills: t(`lvl6.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="7"
            title={t("t41")}
            subtitle="Grade 6"
            ageGroup="Ages 11–12 | Grade 6"
            duration="36 Weeks | 4–5 Sessions/Week | 55 Min/Session"
            aim="To develop proportional reasoning, linear relationships, and foundational algebra skills including equations, inequalities, and geometry of two-dimensional figures."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl7.u${j + 1}.t`),
              duration: t(`lvl7.u${j + 1}.d`),
              skills: t(`lvl7.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="8"
            title={t("t42")}
            subtitle="Grade 7"
            ageGroup="Ages 12–13 | Grade 7"
            duration="36 Weeks | 4–5 Sessions/Week | 55 Min/Session"
            aim="To complete Algebra I, covering linear functions and systems of equations, and introduce geometric proofs, the Pythagorean theorem, and transformations."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl8.u${j + 1}.t`),
              duration: t(`lvl8.u${j + 1}.d`),
              skills: t(`lvl8.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="9"
            title={t("t34")}
            subtitle="Grade 8"
            ageGroup="Ages 13–14 | Grade 8"
            duration="36 Weeks | 4–5 Sessions/Week | 55–60 Min/Session"
            aim="To extend algebra to quadratic and exponential functions, introduce complex numbers, and lay foundations for trigonometry and advanced problem solving."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl9.u${j + 1}.t`),
              duration: t(`lvl9.u${j + 1}.d`),
              skills: t(`lvl9.u${j + 1}.s`)
            }))}
          />

          <LevelCard
            levelNumber="10"
            title={t("t35")}
            subtitle="Grade 9"
            ageGroup="Ages 14–15 | Grade 9"
            duration="36 Weeks | 4–5 Sessions/Week | 60 Min/Session"
            aim="To develop advanced mathematical reasoning through functions, conic sections, matrices, probability, and an introduction to calculus concepts."
            units={Array.from({ length: 10 }).map((_, j) => ({
              no: j + 1,
              topic: t(`lvl10.u${j + 1}.t`),
              duration: t(`lvl10.u${j + 1}.d`),
              skills: t(`lvl10.u${j + 1}.s`)
            }))}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="w-full min-w-0 py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">{t("t20")}</h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">{t("t21")}</p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-blue-600/30 dark:border-blue-400/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">{t("t22")}</h3>
            <div className="font-cormorant text-5xl text-blue-600 dark:text-blue-400 mb-6">{t("t23")}</div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">{t("t24")}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">{t("t25")}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">{t("t26")}</span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">{t("t27")}</Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/western"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors font-sans underline underline-offset-4"
            >{t("t28")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Level Component for Mathematics
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
  units: { no: number; topic: string; duration: string; skills?: string }[];
}) {
  const t = useTranslations("ProgMathematics");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-blue-600/30">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-blue-400 dark:text-blue-400 font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
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
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 dark:bg-black/20 text-blue-400">
              <Sigma className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t29")}</strong>{" "}
            {duration}
          </div>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed text-justify md:text-start">
          <strong className="text-white block mb-1">{t("t30")}</strong> {aim}
        </div>
      </div>

      <div className="p-0 bg-white dark:bg-transparent">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-blue-100 dark:border-white/10 bg-blue-50/50 dark:bg-white/5">
                <th className="py-4 px-6 font-cinzel text-blue-700 dark:text-blue-400 font-bold w-16 text-center">{t("unitLabel")}</th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/4">{t("topicLabel")}</th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold w-1/5 whitespace-nowrap">{t("durationLabel")}</th>
                <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream font-bold">{t("skillsLabel")}</th>
              </tr>
            </thead>
            <tbody className="font-sans text-midnight/80 dark:text-cream/80 text-sm">
              {units.map((unit, idx) => (
                <tr
                  key={idx}
                  className="border-b border-midnight/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-center text-blue-600 dark:text-blue-400">
                    {unit.no}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {unit.topic}
                  </td>
                  <td className="py-4 px-6 text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap">
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
