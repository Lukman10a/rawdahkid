"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  LayoutList,
  CalendarDays,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function MutoonProgramme() {
  const level1Weeks = [
    {
      title: "Week 1",
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
      title: "Week 2",
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
      title: "Week 3",
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
      title: "Week 4",
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

  const level2Weeks = [
    {
      title: "Week 1 — Introductions",
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
      title: "Week 2 — Introduction 4 & The First Principle",
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
      title: "Week 3 — Examination of the Two Doubts",
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
      title: "Week 4 — The Third Principle — Part 1",
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
      title: "Week 5 — The Third Principle (continued) & The Fourth Principle",
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
      title: "Week 6 — Fourth Principle Completion & Full Review",
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
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

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
              Mutoon Curriculum
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">
              المتون
            </p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6 flex flex-wrap justify-center gap-2">
              <span>Memorised Islamic Texts</span>
              <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
              <span>Levels 1–2 (Ongoing)</span>
              <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
              <span>Basic Programme</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto mb-8">
              &quot;Rooting students in the classical texts of Islamic
              scholarship&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & SCHEDULE STRUCTURE */}
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
              Programme Overview
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>
                The Rawdatul Atfaal Mutoon Curriculum dedicates a portion of
                weekly study explicitly to the memorisation, understanding, and
                application of classical Islamic texts (mutoon).
              </p>
              <p>
                These are the identical foundational texts that have been
                studied in structured Islamic institutions for centuries.
                Beginning with short but highly consequential works on Tawheed
                and its nullifiers, students progress through increasingly
                substantive texts.
              </p>
              <p>
                By building this repository of memorised knowledge, we aim to
                furnish our children with protective theological frameworks that
                will serve them throughout their lives.
              </p>
            </div>
          </motion.div>

          {/* Schedule Methodology */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-navy/80 p-8 md:p-10 border border-midnight/5 dark:border-white/5 rounded-sm"
          >
            <h2 className="font-cinzel text-2xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
              <CalendarDays className="w-7 h-7 text-gold" />
              Weekly Class Rhythm
            </h2>
            <p className="font-sans text-midnight/80 dark:text-cream/80 mb-6 leading-relaxed">
              Each week follows a strictly consistent pedagogical pattern. This
              rhythm ensures that new material is effectively consolidated
              before the student advances, preventing knowledge from
              accumulating without deep understanding.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 border border-midnight/5 dark:border-white/5 rounded-lg bg-gray-50 dark:bg-transparent">
                <BookOpen className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-midnight dark:text-cream mb-1 font-cinzel tracking-wider">
                    3 Teaching Days
                  </h4>
                  <p className="text-sm text-midnight/70 dark:text-cream/70 font-sans">
                    Focusing strictly on new sections, accurate recitation, and
                    detailed comprehension of the classical texts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-emerald-500/20 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
                <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-1 font-cinzel tracking-wider">
                    1 Dedicated Revision Day
                  </h4>
                  <p className="text-sm text-emerald-900/70 dark:text-emerald-100/70 font-sans">
                    A completely dedicated day explicitly for reviewing the
                    previous 3 days, solidifying retention, testing memory, and
                    active Q&A.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. AT A GLANCE */}
      <section className="py-20 bg-warm/30 dark:bg-deep/30 border-y border-midnight/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
              Curriculum at a Glance
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg">
                    Level
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Text
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Duration
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Objective Summary
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    Level 1
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Nawāqiḍ Al-Islām
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">4 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed">
                    Memorise & understand the 10 nullifiers of Islam with their
                    evidences
                  </td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap">
                    Level 2
                  </td>
                  <td className="py-4 px-6 font-medium text-midnight dark:text-cream">
                    Al-Qawāʼid Al-Arbaʼ
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">6 Weeks</td>
                  <td className="py-4 px-6 leading-relaxed">
                    Study the 4 principles distinguishing Tawheed from shirk,
                    ancient and modern
                  </td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold whitespace-nowrap text-gold/80 italic">
                    Level 3+
                  </td>
                  <td
                    className="py-4 px-6 font-medium text-midnight/60 dark:text-cream/60 italic"
                    colSpan={3}
                  >
                    Progressing into Al-Usool Ath-Thalaathah & Kitaab At-Tawheed
                    (Development phase)
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
            Detailed Master Plans
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* LEVEL 1 */}
          <WeeklyLevelCard
            levelNumber="1"
            title="Nawāqiḍ Al-Islām — Nullifiers of Islam"
            arabicTitle="نواقض الإسلام"
            author="Shaykh al-Islam Muḥammad ibn ʿAbdil-Wahhāb"
            duration="4 Weeks"
            schedule="3 Teaching Days + 1 Revision Day per Week"
            objective="To memorise and understand the ten nullifiers of Islam, their evidences, and their serious implications for a Muslim's faith and standing before Allah."
            overview="These ten nullifiers are actions or beliefs that completely destroy a person's Islam, exposing them to severe accountability in the Hereafter. Knowledge of them is obligatory upon every Muslim so they may protect their faith."
            weeks={level1Weeks}
          />

          {/* LEVEL 2 */}
          <WeeklyLevelCard
            levelNumber="2"
            title="Al-Qawāʼid Al-Arbaʼ — The Four Principles"
            arabicTitle="القواعد الأربع"
            author="Shaykh al-Islam Muḥammad ibn ʿAbdil-Wahhāb"
            duration="6 Weeks (extended carefully for optimal review)"
            schedule="3 Teaching Days + 1 Revision Day per Week"
            objective="To study and understand the four foundational principles that distinguish true Tawheed from polytheism, and to understand the errors of the mushrikeen throughout history and in our times."
            overview="This treatise establishes four decisive principles drawn from the Qurʼaan and Sunnah that expose the nature of shirk. Each principle builds upon the previous, culminating in the argument that the polytheists of today are in fact more severe in their polytheism than those of the past."
            weeks={level2Weeks}
          />

          {/* LEVEL 3+ COMING SOON SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white/50 dark:bg-navy/20 border border-dashed border-gold/40 shadow-sm rounded-xl overflow-hidden p-8 md:p-12 text-center relative"
          >
            <div className="mb-6">
              <div className="text-gold font-cinzel font-bold tracking-widest text-sm mb-2 uppercase">
                Levels 3 and Beyond
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl text-midnight dark:text-white mb-4">
                Future Master Texts
              </h3>
              <p className="font-sans text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto mb-8">
                The Rawdatul Atfaal Mutoon programme follows a deliberate upward
                trajectory. While Levels 1 & 2 establish the immediate
                protective boundaries, subsequent levels will immerse students
                in deeper foundational treatises, subject to teacher discretion
                and student readiness.
              </p>
            </div>

            <div className="bg-white dark:bg-midnight border border-midnight/5 dark:border-white/5 rounded-lg p-6 max-w-3xl mx-auto text-left">
              <h4 className="font-cinzel text-lg text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 pb-4 mb-4">
                Planned Classical Corpus
              </h4>
              <ul className="space-y-4 font-sans text-midnight/80 dark:text-cream/80">
                <li className="flex items-start gap-4">
                  <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold tracking-wide">Level 3</span> —
                    Al-Usool Ath-Thalaathah (The Three Fundamentals)
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold tracking-wide">Level 4</span> —
                    Kashf Ash-Shubuhaat (Removal of the Doubts)
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold tracking-wide">Level 5</span> —
                    Kitaab At-Tawheed (The Book of Monotheism)
                  </div>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-sm font-amiri text-midnight/50 dark:text-cream/50 italic">
              &quot;And say: My Lord, increase me in knowledge.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA / PRICING SECTION */}
      <section className="py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
            Begin Your Child&apos;s Journey
          </h2>
          <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
            Enrol your child in our Mutoon foundational curriculum. Secure their
            faith with immutable texts memorised generation after generation.
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              Mutoon Mentorship
            </h3>
            <div className="font-cormorant text-5xl text-gold mb-6">
              $1,200{" "}
              <span className="text-xl text-midnight/60 dark:text-cream/60 font-sans">
                / year
              </span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Structured Memorisation
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  3 Teaching Days + 1 Revision
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Classical Foundational Texts
                </span>
              </li>
            </ul>
            <Link href="/enrol">
              <Button variant="primary" className="w-full py-4 text-lg">
                Enrol Now
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/programmes/islamic"
              className="text-gold hover:text-amber transition-colors font-sans underline underline-offset-4"
            >
              ← Back to Islamic Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Customized component to handle the specific Week/Day mapping requirement for the Mutoon programme
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
}: {
  levelNumber: string;
  title: string;
  arabicTitle: string;
  author: string;
  duration: string;
  schedule: string;
  objective: string;
  overview: string;
  weeks: Array<{
    title: string;
    days: Array<{ day: string; type: string; content: string }>;
  }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white/50 dark:bg-navy/20 border border-midnight/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm"
    >
      <div className="bg-midnight dark:bg-navy p-8 md:p-10 border-b border-gold/30 relative">
        {/* Abstract Arabic Background overlay */}
        <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none opacity-5">
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
            <div className="font-amiri text-3xl text-gold/90 md:text-right">
              {arabicTitle}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 mb-6 border-b border-white/10 pb-6">
            <div>
              <strong className="text-white">Duration:</strong> {duration}
            </div>
            <div>
              <strong className="text-white">Schedule:</strong> {schedule}
            </div>
          </div>

          <div className="text-sm text-cream/80 leading-relaxed space-y-4">
            <div>
              <strong className="text-white">Objective:</strong> {objective}
            </div>
            <div>
              <strong className="text-white">Overview:</strong> {overview}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-8 inline-flex items-center gap-3 border-b-2 border-gold/40 pb-2">
          <LayoutList className="w-5 h-5 text-gold" /> Comprehensive Lesson Plan
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
                    {/* Day Info Tag */}
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

                    {/* Content */}
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
