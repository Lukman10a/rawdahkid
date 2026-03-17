"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, GraduationCap, LayoutList } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

export default function TawheedProgramme() {
  const t = useTranslations("ProgTawheed");

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
              {t("t0")}
            </p>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              {t("t1")}
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">
              {t("t2")}
            </p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6 flex flex-wrap justify-center items-center gap-2">
              <span>{t("t3")}</span>
              <span className="hidden sm:inline">{t("t4")}</span>
              <span>{t("t5")}</span>
              <span className="hidden sm:inline">{t("t4")}</span>
              <span>{t("t7")}</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              {t("t8")}
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
              {t("t9")}
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>{t("t10")}</p>
              <p>{t("t11")}</p>
              <p>{t("t12")}</p>
            </div>
          </motion.div>

          {/* Core Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6">
              {t("t13")}
            </h2>
            <ul className="space-y-5">
              {[
                "Established upon the authentic methodology and Saudi Arabia school curriculum.",
                "Gradual progression building unshakeable Islamic foundations.",
                "Deep understanding of the Three Fundamental Principles.",
                "Clear distinction between true Monotheism and its nullifiers.",
                "Practical integration into daily life, prayer, and character.",
              ].map((principle, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <span className="font-sans text-midnight/80 dark:text-cream/80">
                    {principle}
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
              {t("t14")}
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg">
                    {t("t15")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("t16")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("t17")}
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    {t("t18")}
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {t("t19")}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t20")}
                  </td>
                  <td className="py-4 px-6">{t("t21")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t22")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {t("t23")}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t24")}
                  </td>
                  <td className="py-4 px-6">{t("t25")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t26")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {t("t27")}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t28")}
                  </td>
                  <td className="py-4 px-6">{t("t25")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t30")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {t("t31")}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t32")}
                  </td>
                  <td className="py-4 px-6">{t("t25")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t34")}</td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    {t("t35")}
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    {t("t36")}
                  </td>
                  <td className="py-4 px-6">{t("t25")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t38")}</td>
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
            {t("t39")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* LEVEL 1 */}
          <SingleSectionLevelCard
            levelNumber="1"
            title={t("t20")}
            duration="12 Weeks"
            classDuration="40 Minutes per Session"
            aim="To provide foundational knowledge about Allah's Lordship, the reason for existence and the basic tenets of the religion."
            topics={[
              "What is compulsory for mankind to know",
              "Allah is my Lord",
              "Knowing the Lord (Allah)",
              "Allah is the Creator",
              "From the amazing power of Allah in His slaves",
              "Allah is the Provider",
              "I worship Allah, my Lord",
              "My religion is Islam",
              "My Prophet is Muhammad صلى الله عليه وسلم",
              "The Noble Qur'an",
            ]}
          />

          {/* LEVEL 2 */}
          <DualSectionLevelCard
            levelNumber="2"
            title={t("t24")}
            duration="16 Weeks"
            classDuration="40 Minutes per Session"
            aim="To teach the fundamentals of the deen, the pillars of Islam, to understand the reason for creation and tawheed."
            sectionTitle1="Section 1"
            sectionTitle2="Section 2"
            section1={[
              "Revision of previously learnt lessons",
              "The three fundamentals of the deen",
              "The first fundamental: Knowledge of the slave about his Lord",
              "The wisdom behind the creation of Jinn and Mankind",
              "The obligation of worshiping Allah alone",
              "The worship of other than Allah is Shirk",
            ]}
            section2={[
              "The second fundamental: Knowledge of the slave about his deen",
              "Levels of the religion: The first level — Al-Islam",
              "The pillars of Islam",
              "Meaning of the Shahaadataan (The two testimonies of faith)",
              "The second level — Al-Imaan",
              "Belief in resurrection",
              "The third level — Al-Ihsaan",
              "The third fundamental: Knowledge of the slave about his Prophet Muhammad صلى الله عليه وسلم",
            ]}
          />

          {/* LEVEL 3 */}
          <SingleSectionLevelCard
            levelNumber="3"
            title={t("t28")}
            duration="16 Weeks"
            classDuration="40 Minutes per Session"
            aim="To learn the levels of the religion, what each level necessitates and how to attain perfection in each."
            topics={[
              "Levels of the deen — The first level: Islam",
              "The pillars of Islam",
              "The first pillar: The testifications (Shahaadataan)",
              "The second and third pillar",
              "The fourth and fifth pillar",
              "The second level of the deen: Al-Emaan",
              "The pillars of Emaan: The first pillar — Belief in Allah",
              "The second pillar — Belief in the angels",
              "The third and fourth pillar — Belief in the books and messengers",
              "The fifth pillar — Belief in the last day",
              "The sixth pillar — Belief in Al-Qadr (the good and bad of it)",
              "The third level of the deen: Al-Ihsaan",
            ]}
          />

          {/* LEVEL 4 */}
          <SingleSectionLevelCard
            levelNumber="4"
            title={t("t32")}
            duration="16 Weeks"
            classDuration="40 Minutes per Session"
            aim="To teach the true tawheed, types of tawheed and some of its nullifiers."
            topics={[
              "The wisdom behind creation",
              "Al-Ibaadah (worship)",
              "Tawheed and its types",
              "Tawheed Ar-Rububiyyah",
              "Tawheed Al-Uluhiyyah",
              "Tawheed Al-Asmaa' was-Sifaat",
              "The messengers of Allah to the creation",
              "The first obligation of Allah upon mankind",
              "The true belief",
              "Shaytaan",
              "Ruling with other than what was revealed by Allah",
              "Whoever claims knowledge of the unseen or is pleased with the worship of the people is a Taaghoot",
              "The believer must disbelieve in all that is worshipped besides Allah",
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
              <BookOpen className="w-48 h-48 text-gold" />
            </div>

            <div className="bg-linear-to-br from-midnight to-navy border-b border-gold/30 p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    {t("t40")}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2">
                    {t("t36")}
                  </h3>
                  <p className="font-sans text-cream/70">{t("t42")}</p>
                </div>
                <div className="font-amiri text-2xl md:text-3xl text-gold/90 text-end">
                  {t("t43")}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
                <div>
                  <strong className="text-white">{t("t44")}</strong>
                  {t("t25")}
                </div>
                <div>
                  <strong className="text-white">{t("t46")}</strong>
                  {t("t47")}
                </div>
              </div>
              <div className="text-sm text-cream/80 leading-relaxed">
                <strong className="text-white block mb-1">{t("t48")}</strong>
                {t("t49")}
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white dark:bg-transparent relative z-10">
              <div className="mb-10 text-midnight/80 dark:text-muted font-sans space-y-4">
                <p>
                  <strong className="text-midnight dark:text-cream font-cinzel text-lg">
                    {t("t50")}
                  </strong>
                  <br />
                  {t("t51")}
                  <em>{t("t52")}</em>
                  {t("t53")}
                </p>
                <div className="bg-ivory dark:bg-midnight p-5 rounded-md border border-midnight/5 dark:border-white/5 my-6">
                  <p className="font-semibold mb-2 text-midnight dark:text-cream">
                    {t("t54")}
                  </p>
                  <ul className="list-disc list-inside ms-5 space-y-1 text-midnight/70 dark:text-cream/70">
                    <li>{t("t55")}</li>
                    <li>{t("t56")}</li>
                    <li>{t("t57")}</li>
                  </ul>
                </div>
                <p>{t("t58")}</p>
              </div>

              <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
                <LayoutList className="w-5 h-5 text-gold" />
                {t("t59")}
              </h4>
              <div className="grid sm:grid-cols-1 gap-x-8 gap-y-4">
                <div className="flex items-start gap-4 p-4 border border-midnight/5 dark:border-white/5 rounded-lg bg-gray-50/50 dark:bg-navy/50">
                  <span className="flex items-center justify-center min-w-8 h-8 rounded-full bg-gold/20 text-gold text-sm font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <span className="font-sans text-midnight/80 dark:text-cream/90 leading-relaxed text-base">
                    Memorization and detailed explanation of the text{" "}
                    <strong>{t("t52")}</strong>
                    {t("t61")}
                  </span>
                </div>
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
            {t("t62")}
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            {t("t63")}
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              {t("t64")}
            </h3>
            <div className="font-cormorant text-5xl text-gold mb-6">
              $800{" "}
              <span className="text-xl text-midnight/60 dark:text-cream/60 font-sans">
                {t("t65")}
              </span>
            </div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t66")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t67")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  {t("t68")}
                </span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">
                {t("t69")}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/islamic"
              className="text-gold hover:text-amber transition-colors font-sans underline underline-offset-4"
            >
              {t("t70")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Single Section (Levels 1, 3, 4)
function SingleSectionLevelCard({
  levelNumber,
  title,
  duration,
  classDuration,
  aim,
  topics,
}: {
  levelNumber: string;
  title: string;
  duration: string;
  classDuration: string;
  aim: string;
  topics: string[];
}) {
  const t = useTranslations("ProgTawheed");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6">
          <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
            BASIC {levelNumber}
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
            {title}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t44")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t46")}</strong> {classDuration}
          </div>
        </div>
        <div className="text-sm text-cream/80 leading-relaxed">
          <strong className="text-white block mb-1">{t("t48")}</strong> {aim}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t74")}
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
            >
              <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-sans text-midnight/80 dark:text-cream/90">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Dual Sections (Level 2)
function DualSectionLevelCard({
  levelNumber,
  title,
  duration,
  classDuration,
  aim,
  sectionTitle1,
  sectionTitle2,
  section1,
  section2,
}: {
  levelNumber: string;
  title: string;
  duration: string;
  classDuration: string;
  aim: string;
  sectionTitle1: string;
  sectionTitle2: string;
  section1: string[];
  section2: string[];
}) {
  const t = useTranslations("ProgTawheed");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30">
        <div className="mb-6">
          <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
            BASIC {levelNumber}
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
            {title}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
          <div>
            <strong className="text-white">{t("t44")}</strong> {duration}
          </div>
          <div>
            <strong className="text-white">{t("t46")}</strong> {classDuration}
          </div>
        </div>
        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t48")}</strong> {aim}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sec 1 */}
          <div>
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream border-b-2 border-gold/40 pb-2 mb-6 inline-block">
              {sectionTitle1}
            </h4>
            <div className="space-y-4">
              {section1.map((topic, idx) => (
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
          </div>

          {/* Sec 2 */}
          <div>
            <h4 className="font-cinzel text-xl text-midnight dark:text-cream border-b-2 border-gold/40 pb-2 mb-6 inline-block">
              {sectionTitle2}
            </h4>
            <div className="space-y-4">
              {section2.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 border-b border-midnight/5 dark:border-white/5 pb-2"
                >
                  <span className="flex items-center justify-center min-w-6 h-6 rounded-md bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 text-midnight dark:text-cream text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                    {idx + section1.length + 1}
                  </span>
                  <span className="font-sans text-sm text-midnight/80 dark:text-cream/90 pt-0.5">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
