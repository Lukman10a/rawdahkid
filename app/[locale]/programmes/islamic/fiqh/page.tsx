"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, GraduationCap, LayoutList } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

export default function FiqhProgramme() {
  const t = useTranslations("ProgFiqh");

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
            <p className="font-amiri text-gold text-2xl md:text-3xl mb-4">{t("t0")}</p>
            <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">{t("t1")}</h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">{t("t2")}</p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6">{t("t3")}</div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">{t("t4")}</p>
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
              <BookOpen className="w-8 h-8 text-gold" />{t("t5")}</h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>{t("t6")}</p>
              <p>{t("t7")}</p>
              <p>{t("t8")}</p>
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
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6">{t("t9")}</h2>
            <ul className="space-y-5">
              {[
                "Focus purely on Authentic Jurisprudence built on Quran and Sunnah.",
                "Continuous revision structures ensuring 100% retention by Level 5.",
                "Practical application and situational readiness (Sujud Sahw, Jama'ah rules).",
                "Gradual build-up preventing cognitive overload for younger minds.",
                "Proper usage of correct classical Arabic Fiqh terminology.",
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
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">{t("t10")}</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg">{t("t11")}</th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">{t("t12")}</th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">{t("t13")}</th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">{t("t14")}</td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">{t("t15")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t16")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">{t("t17")}</td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">{t("t18")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t19")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">{t("t20")}</td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">{t("t21")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t22")}</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">{t("t23")}</td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">{t("t24")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t25")}</td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">{t("t26")}</td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">{t("t27")}</td>
                  <td className="py-4 px-6 leading-relaxed">{t("t28")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. DETAILED COURSE OUTLINES */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">{t("t29")}</h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* LEVEL 1 */}
          <SingleSectionLevelCard
            levelNumber="1"
            title={t("t15")}
            focus="Purification (Tahaarah) & Prayer (Salah) — Foundational concepts"
            aim="To introduce students to the essentials of Islamic worship, beginning with correct purification and the performance of the five daily prayers."
            topics={[
              "Purification (At-Tahaarah)",
              "Characteristics of ablution (Sifat Al-Wudhooʼ)",
              "The obligatory prayers (As-Salawaat Al-Mafrooda)",
              "Characteristics of the prayer (Sifat As-Salah)",
              "At-Tashahhud",
              "Salutation upon the Prophet (صلى الله عليه وسلم)",
              "Nullifiers of the prayer (Nawaaqiḍ As-Salah)",
            ]}
          />

          {/* LEVEL 2 */}
          <DualSectionLevelCard
            levelNumber="2"
            title={t("t18")}
            focus="Revision & Expansion — Ablution, Supplication & Prayer"
            aim="To consolidate Level 1 knowledge and introduce students to the opening supplication of prayer, nullifiers of ablution, and deeper aspects of Salah."
            section1={[
              "Revision of all that has been taught in Level 1",
              "Cleanliness with water and other than it",
              "Characteristics of ablution (Sifat Al-Wudhooʼ)",
              "Nullifiers of ablution (Nawaaqiḍ Al-Wudhooʼ)",
              "The opening supplication for Salah (Duʼāʼ Al-Istiftaah)",
            ]}
            section2={[
              "Revision of all that has been taught in Section 1",
              "The obligatory prayers (As-Salawaat Al-Mafrooda)",
              "At-Tashahhud",
              "Salutation upon the Prophet (صلى الله عليه وسلم)",
              "Supplications to seek refuge in after salutation upon the Prophet",
              "Characteristics of the prayer (Sifat As-Salah)",
              "Nullifiers of the prayer (Nawaaqiḍ As-Salah)",
            ]}
          />

          {/* LEVEL 3 */}
          <DualSectionLevelCard
            levelNumber="3"
            title={t("t48")}
            focus="Manners of Relieving Oneself, Conditions & Obligations of Ablution, Dry Ablution & Prayer"
            aim="To teach the correct manners of the lavatory, the conditions and obligations of wudhooʼ, introduction to tayammum, and the conditions and pillars of the prayer."
            section1={[
              "Revision of all that has been taught in Level 2",
              "Manners of relieving oneself (Aadaab Qadhaʼ Al-Haajah)",
              "Cleanliness with water and stone (Al-Istinjaaʼ wal-Istijmaar)",
              "Removal of impurity (Izaalat An-Najaasah)",
              "Conditions of ablution (Shurooṭ Al-Wudhooʼ)",
              "Obligations of ablution (Waajibaaat Al-Wudhooʼ)",
            ]}
            section2={[
              "Revision of all that has been taught in Section 1",
              "Dry ablution (At-Tayammum)",
              "Times of prayer (Awqaat As-Salah)",
              "Conditions of the prayer (Shurooṭ As-Salah)",
              "Pillars of the prayer (Arkaan As-Salah)",
              "Obligatory acts of the prayer (Waajibaat As-Salah)",
            ]}
          />

          {/* LEVEL 4 */}
          <DualSectionLevelCard
            levelNumber="4"
            title={t("t24")}
            focus="Comprehensive Wudhooʼ, Adhaan, Prayer Conditions & Detailed Explanations of Prayer Texts"
            aim="To provide a thorough study of ablution, the call to prayer, times and conditions of Salah, and detailed explanation of key prayer recitations including Surah Al-Faatihah and At-Tashahhud."
            sectionTitle1="Lesson 1"
            sectionTitle2="Lesson 2"
            section1={[
              "Introduction",
              "Revision of all that has been taught in Level 3",
              "Ablution (Al-Wudhooʼ) — comprehensive review",
              "Conditions of ablution (Shurooṭ Al-Wudhooʼ)",
              "Obligations of ablution (Waajibaat Al-Wudhooʼ)",
              "Sunan (Prophetic guidance) of ablution",
              "Nullifiers of ablution (Nawaaqiḍ Al-Wudhooʼ)",
              "The call to prayer and its establishment (Al-Adhaan wal-Iqaamah)",
              "Prophetic guidance on the call to prayer (Sifat Al-Adhaan)",
              "Conditions of the prayer (Shurooṭ As-Salah)",
            ]}
            section2={[
              "Revision of all that has been taught in Lesson 1",
              "Times of the obligatory prayers (Awqaat As-Salawaat Al-Mafrooda)",
              "Pillars of the prayer (Arkaan As-Salah)",
              "Obligatory acts of the prayer (Waajibaat As-Salah)",
              "Difference between the pillars and obligations of the prayer",
              "Explanation of Surah Al-Faatihah",
              "Explanation of the meaning of At-Tashahhud",
              "Explanation of the salutation upon the Prophet صلى الله عليه وسلم",
              "Revision Catalogue",
            ]}
          />

          {/* LEVEL 5 */}
          <DualSectionLevelCard
            levelNumber="5"
            title={t("t27")}
            focus="Classification of Water, Advanced Wudhooʼ Topics, Full Prayer Description, Congregational Prayer & Voluntary Prayers"
            aim="To give students a detailed understanding of water classifications, wiping over leather socks, dry ablution, a complete description of prayer including prostration of forgetfulness, and a thorough grounding in congregational prayer and voluntary prayers."
            sectionTitle1="Lesson 1"
            sectionTitle2="Lesson 2"
            section1={[
              "Introduction",
              "Revision of all that has been taught in Level 4",
              "Classification of water (Aqsaam Al-Maaʼ)",
              "Wiping over the shoes/socks (Al-Mash ʼalaa Al-Khuffayn)",
              "Dry ablution (At-Tayammum) — detailed study",
              "The prayer (As-Salah) — comprehensive overview",
              "Manners of walking to prayer and waiting for it",
              "Characteristics of the prayer (Sifat As-Salah) — detailed",
              "Sunan (recommended acts) of the prayer",
              "Detested acts in the prayer (Makroohaat As-Salah)",
              "Prostration of forgetfulness (Sujood As-Sahw)",
            ]}
            section2={[
              "Introduction",
              "Revision of all that has been taught in Lesson 1",
              "Congregational prayer (As-Salah Al-Jamaaʼah)",
              "Rulings of leadership (Ahkaam Al-Imaamah)",
              "Position of the Imam and those praying behind him",
              "The maʼmoom following the Imam (Al-Iqtidaaʼ)",
              "Ruling of the masboq (one who misses some of the prayer)",
              "Permissible excuses for leaving off the congregational prayer",
              "Prayer of the people with excuses (Salah Ahl Al-Aʼdhar)",
              "The voluntary prayer (At-Tatawwuʼ)",
              "Prohibited times for praying (Awqaat An-Nahy)",
              "Revision Catalogue",
            ]}
          />
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">{t("t30")}</h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">{t("t31")}</p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">{t("t32")}</h3>
            <div className="font-cormorant text-5xl text-gold mb-6">
              $1,200{" "}
              <span className="text-xl text-midnight/60 dark:text-cream/60 font-sans">{t("t33")}</span>
            </div>
            <ul className="text-start space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">{t("t34")}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">{t("t35")}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">{t("t36")}</span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">{t("t37")}</Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/islamic"
              className="text-gold hover:text-amber transition-colors font-sans underline underline-offset-4"
            >{t("t38")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Single Section (Level 1)
function SingleSectionLevelCard({
  levelNumber,
  title,
  focus,
  aim,
  topics,
}: {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  topics: string[];
}) {
  const t = useTranslations("ProgFiqh");
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
            LEVEL {levelNumber} — BASIC FIQH
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white md:mb-2">
            {title}
          </h3>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t39")}</strong> {focus}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {aim}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <LayoutList className="w-5 h-5 text-gold" />{t("t41")}</h4>
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

// Dual Sections (Levels 2-5)
function DualSectionLevelCard({
  levelNumber,
  title,
  focus,
  aim,
  sectionTitle1 = "Section 1",
  sectionTitle2 = "Section 2",
  section1,
  section2,
}: {
  levelNumber: string;
  title: string;
  focus: string;
  aim: string;
  sectionTitle1?: string;
  sectionTitle2?: string;
  section1: string[];
  section2: string[];
}) {
  const t = useTranslations("ProgFiqh");
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
            LEVEL {levelNumber} — BASIC FIQH
          </div>
          <h3 className="font-playfair text-2xl md:text-4xl text-white md:mb-2">
            {title}
          </h3>
        </div>

        <div className="text-sm text-cream/80 leading-relaxed space-y-3">
          <div>
            <strong className="text-white">{t("t39")}</strong> {focus}
          </div>
          <div>
            <strong className="text-white">{t("t40")}</strong> {aim}
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
                    {idx + 1}
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
