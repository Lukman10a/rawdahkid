"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";

export function DetailedCourseSection() {
  const t = useTranslations("ProgTawheed");

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t39")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
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
            "The second level — Al-Emaan",
            "Belief in resurrection",
            "The third level — Al-Ihsaan",
            "The third fundamental: Knowledge of the slave about his Prophet Muhammad صلى الله عليه وسلم",
          ]}
        />

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
  );
}

type SingleSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  duration: string;
  classDuration: string;
  aim: string;
  topics: string[];
};

function SingleSectionLevelCard({
  levelNumber,
  title,
  duration,
  classDuration,
  aim,
  topics,
}: SingleSectionLevelCardProps) {
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

type DualSectionLevelCardProps = {
  levelNumber: string;
  title: string;
  duration: string;
  classDuration: string;
  aim: string;
  sectionTitle1: string;
  sectionTitle2: string;
  section1: string[];
  section2: string[];
};

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
}: DualSectionLevelCardProps) {
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
