"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";

type DayEntry = { day: string; type: string; content: string };
type WeekEntry = { title: string; days: DayEntry[] };

export function DetailedCourseSection() {
  const t = useTranslations("ProgMutoon");

  const level1Weeks: WeekEntry[] = [
    {
      title: t("t68"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The First Nullifier — Associating partners with Allah (Shirk)",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The Second Nullifier — Appointing an intermediary between oneself and Allah (seeking intercession through created beings)",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "The Third Nullifier — Not declaring the polytheists to be disbelievers, doubting their disbelief, or considering their religion to be correct",
        },
        {
          day: "Day 4",
          type: "Revision",
          content:
            "Revision of Week 1 — all three nullifiers with their evidences",
        },
      ],
    },
    {
      title: t("t69"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The Fourth Nullifier — Believing that any guidance is more perfect or complete than the guidance of the Prophet صلى الله عليه وسلم",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The Fifth Nullifier — Hating anything that the Messenger صلى الله عليه وسلم came with, even if one acts upon it",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "The Sixth Nullifier — Mocking or ridiculing any aspect of the religion, its rewards or punishments",
        },
        {
          day: "Day 4",
          type: "Revision",
          content: "Revision of Week 2 — nullifiers four through six",
        },
      ],
    },
    {
      title: t("t70"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The Seventh Nullifier — Practising magic (sihr), or being pleased with its practice",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The Eighth Nullifier — Supporting and aiding the polytheists against the Muslims",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "The Ninth Nullifier — Believing that some people are exempt from following the Shariʼah of the Prophet صلى الله عليه وسلم",
        },
        {
          day: "Day 4",
          type: "Revision",
          content: "Revision of Week 3 — nullifiers seven through nine",
        },
      ],
    },
    {
      title: t("t71"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The Tenth Nullifier — Turning away from the religion of Allah: not learning it and not acting by it",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The Closing Remarks of the Author — warnings, conditions and distinctions related to the nullifiers",
        },
        {
          day: "Day 3",
          type: "Revision",
          content: "General Revision — all ten nullifiers with complete review",
        },
        {
          day: "Day 4",
          type: "Revision",
          content: "Final Consolidation — full memorisation check and Q&A",
        },
      ],
    },
  ];

  const level2Weeks: WeekEntry[] = [
    {
      title: t("t67"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "Introduction 1 — Opening, seeking Allah's help and tawfeeq; author's intention",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "Introduction 2 — Knowing Allah through His names, attributes, and actions",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "Introduction 3 — The obligation of worshipping Allah alone and avoiding shirk",
        },
        {
          day: "Day 4",
          type: "Revision",
          content: "Revision of Week 1 — the three introductions reviewed",
        },
      ],
    },
    {
      title: t("t64"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "Introduction 4 — The religion of Ibraaheem (ʿalayhi as-salaam): its nature and obligation",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The First Principle — The polytheists (mushrikeen) affirmed Allah's Rububiyyah yet still committed shirk in His Uluhiyyah (worship)",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "The Second Principle — The doubts and justifications raised by the disbelievers to legitimise their shirk",
        },
        { day: "Day 4", type: "Revision", content: "Revision of Week 2" },
      ],
    },
    {
      title: t("t65"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "Doubt 1 (continued) — Seeking closeness to Allah through the righteous: analysis and Qurʼaanic refutation",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "Doubt 2 — Seeking intercession (shafaaʼah) through created beings: the corrupt understanding",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "Intercession is of two types: the lawful intercession (granted by Allah's permission) and the forbidden intercession (directed to other than Allah)",
        },
        { day: "Day 4", type: "Revision", content: "Revision of Week 3" },
      ],
    },
    {
      title: t("t66"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The Third Principle (Part 1) — The polytheists worshipped a variety of deities: angels, prophets, the righteous, trees, stones, sun and moon",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The Third Principle (Part 2) — Qurʼaanic evidence against the worship of angels and prophets",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "The Third Principle (Part 3) — The ʼIsaa (ʼalayhi as-salaam) example: those who were worshipped and disowned the worship",
        },
        { day: "Day 4", type: "Revision", content: "Revision of Week 4" },
      ],
    },
    {
      title: t("t62"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The Third Principle (Part 4) — Worship of the jinn; those who were pleased with worship and those who were not",
        },
        {
          day: "Day 2",
          type: "Lesson",
          content:
            "The Third Principle (Part 5) — Conclusion: the Prophet's صلى الله عليه وسلم command to cut off all means leading to shirk",
        },
        {
          day: "Day 3",
          type: "Lesson",
          content:
            "The Fourth Principle — The polytheists of today are more severe and extreme in their shirk than the polytheists of the past",
        },
        { day: "Day 4", type: "Revision", content: "Revision of Week 5" },
      ],
    },
    {
      title: t("t63"),
      days: [
        {
          day: "Day 1",
          type: "Lesson",
          content:
            "The Fourth Principle (Part 2) — Evidence: the ancient mushrikeen only called upon their deities in hardship; today's mushrikeen call on them in both ease and hardship",
        },
        {
          day: "Day 2",
          type: "Revision",
          content:
            "Comprehensive Revision — The First Principle & The Second Principle",
        },
        {
          day: "Day 3",
          type: "Revision",
          content:
            "Comprehensive Revision — The Third Principle & The Fourth Principle",
        },
        {
          day: "Day 4",
          type: "Revision",
          content:
            "Final Review — Complete text of Al-Qawāʼid Al-Arbaʼ: memorisation assessment and Q&A",
        },
      ],
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
          {t("t34")}
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto"></div>
      </div>

      <div className="space-y-24">
        <WeeklyLevelCard
          levelNumber="1"
          title={t("t61")}
          arabicTitle="نواقض الإسلام"
          author="Shaykh al-Islam Muḥammad ibn ʿAbdil-Wahhāb"
          duration="4 Weeks"
          schedule="3 Teaching Days + 1 Revision Day per Week"
          objective="To memorise and understand the ten nullifiers of Islam, their evidences, and their serious implications for a Muslim's faith and standing before Allah."
          overview="These ten nullifiers are actions or beliefs that completely destroy a person's Islam, exposing them to severe accountability in the Hereafter. Knowledge of them is obligatory upon every Muslim so they may protect their faith."
          weeks={level1Weeks}
        />

        <WeeklyLevelCard
          levelNumber="2"
          title={t("t60")}
          arabicTitle="القواعد الأربع"
          author="Shaykh al-Islam Muḥammad ibn ʿAbdil-Wahhāb"
          duration="6 Weeks (extended carefully for optimal review)"
          schedule="3 Teaching Days + 1 Revision Day per Week"
          objective="To study and understand the four foundational principles that distinguish true Tawheed from polytheism, and to understand the errors of the mushrikeen throughout history and in our times."
          overview="This treatise establishes four decisive principles drawn from the Qurʼaan and Sunnah that expose the nature of shirk. Each principle builds upon the previous, culminating in the argument that the polytheists of today are in fact more severe in their polytheism than those of the past."
          weeks={level2Weeks}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/50 dark:bg-navy/20 border border-dashed border-gold/40 shadow-sm rounded-xl overflow-hidden p-8 md:p-12 text-center relative"
        >
          <div className="mb-6">
            <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
              {t("t35")}
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-midnight dark:text-white mb-4">
              {t("t36")}
            </h3>
            <p className="font-sans text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto mb-8">
              {t("t37")}
            </p>
          </div>

          <div className="bg-white dark:bg-midnight border border-midnight/5 dark:border-white/5 rounded-lg p-6 max-w-3xl mx-auto text-start">
            <h4 className="font-cinzel text-lg text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 pb-4 mb-4">
              {t("t38")}
            </h4>
            <ul className="space-y-4 font-sans text-midnight/80 dark:text-cream/80">
              <li className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold tracking-wide">{t("t39")}</span>
                  {t("t40")}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold tracking-wide">{t("t41")}</span>
                  {t("t42")}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold tracking-wide">{t("t43")}</span>
                  {t("t44")}
                </div>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-sm font-amiri text-midnight/50 dark:text-cream/50 italic">
            {t("t45")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

type WeeklyLevelCardProps = {
  levelNumber: string;
  title: string;
  arabicTitle: string;
  author: string;
  duration: string;
  schedule: string;
  objective: string;
  overview: string;
  weeks: WeekEntry[];
};

function WeeklyLevelCard({
  levelNumber,
  title,
  arabicTitle,
  author,
  duration,
  schedule,
  objective,
  overview,
  weeks,
}: WeeklyLevelCardProps) {
  const t = useTranslations("ProgMutoon");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30 relative">
        <div className="absolute inset-y-0 inset-e-8 flex items-center pointer-events-none opacity-5">
          <span className="font-amiri text-8xl md:text-9xl tracking-widest leading-none text-white">
            {arabicTitle}
          </span>
        </div>

        <div className="relative z-10">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2">
                LEVEL {levelNumber}
              </div>
              <h3 className="font-playfair text-2xl md:text-4xl text-white mb-2">
                {title}
              </h3>
              <p className="font-sans text-cream/70 text-sm">
                Author:{" "}
                <span className="font-semibold text-cream/90">{author}</span>
              </p>
            </div>
            <div className="font-amiri text-3xl text-gold/90 md:text-end">
              {arabicTitle}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
            <div>
              <strong className="text-white">{t("t55")}</strong> {duration}
            </div>
            <div>
              <strong className="text-white">{t("t56")}</strong> {schedule}
            </div>
          </div>

          <div className="text-sm text-cream/80 leading-relaxed space-y-4">
            <div>
              <strong className="text-white">{t("t57")}</strong> {objective}
            </div>
            <div>
              <strong className="text-white">{t("t58")}</strong> {overview}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
          <LayoutList className="w-5 h-5 text-gold" />
          {t("t59")}
        </h4>

        <div className="space-y-12">
          {weeks.map((week, wIdx) => (
            <div
              key={wIdx}
              className="bg-gray-50/50 dark:bg-navy/30 rounded-lg border border-midnight/5 dark:border-white/5 overflow-hidden"
            >
              <div className="bg-warm/50 dark:bg-deep/80 px-6 py-3 border-b border-midnight/5 dark:border-white/5">
                <h5 className="font-cinzel font-bold text-lg text-midnight dark:text-gold">
                  {week.title}
                </h5>
              </div>
              <div className="divide-y divide-midnight/5 dark:divide-white/5">
                {week.days.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className={`p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 ${d.type === "Revision" ? "bg-emerald-50/30 dark:bg-emerald-950/20" : ""}`}
                  >
                    <div className="md:col-span-3 lg:col-span-2 flex items-start gap-3">
                      <div
                        className={`text-xs font-bold font-sans px-3 py-1 rounded-full uppercase tracking-widest ${
                          d.type === "Revision"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
                            : "bg-gold/10 text-gold border border-gold/20 dark:border-gold/10"
                        }`}
                      >
                        {d.day}
                      </div>
                      <span
                        className={`text-sm font-semibold mt-1 ${d.type === "Revision" ? "text-emerald-700 dark:text-emerald-400" : "text-midnight/60 dark:text-cream/50"}`}
                      >
                        {d.type.toUpperCase()}
                      </span>
                    </div>

                    <div className="md:col-span-9 lg:col-span-10">
                      <p
                        className={`font-sans leading-relaxed ${d.type === "Revision" ? "text-emerald-900/90 dark:text-emerald-100/90" : "text-midnight/80 dark:text-cream/90"}`}
                      >
                        {d.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
