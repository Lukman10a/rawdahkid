"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Calendar, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function QuranMemorisation() {
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
              Qurʼān Memorisation Programme
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-6">
              برنامج حفظ القرآن الكريم
            </p>
            <div className="font-sans text-sm md:text-base tracking-widest uppercase text-midnight/60 dark:text-cream/60 mb-6">
              Juzʼ ʿAmma &nbsp;|&nbsp; Terms 1–4 &nbsp;|&nbsp; Basic Programme
            </div>

            <div className="inline-flex items-center gap-4 bg-white/50 dark:bg-navy/50 px-6 py-3 rounded-full border border-midnight/5 dark:border-white/5 mb-8">
              <span className="font-amiri text-xl">Sūrat An-Nās (114)</span>
              <span className="text-gold">⟶</span>
              <span className="font-amiri text-xl">Sūrat An-Nabaʼ (78)</span>
            </div>

            <p className="font-playfair italic text-2xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
              &quot;Connecting young hearts to the Book of Allah&quot;
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
              Programme Overview
            </h2>
            <div className="space-y-4 text-midnight/80 dark:text-muted font-sans leading-relaxed text-lg">
              <p>
                The Rawdatul Atfaal Qurʼān Memorisation Programme guides
                students through the systematic memorisation of Juzʼ ʿAmma — the
                thirtieth part of the Qurʼān — across four structured terms.
              </p>
              <p>
                Each term covers a defined range of surahs, progressing from the
                shorter surahs at the end of the Qurʼān toward the longer surahs
                earlier in Juzʼ ʿAmma.
              </p>
              <p>
                Every term concludes with a dedicated revision week followed by
                a formal examination, ensuring that memorised material is
                retained and built upon.
              </p>
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
              Programme Principles
            </h2>
            <ul className="space-y-5">
              {[
                "Each week focuses on memorisation of the assigned surah(s) with correct pronunciation (tajweed).",
                "Revision weeks are dedicated entirely to consolidating all surahs from the current term.",
                "Examination weeks assess recitation from memory of the complete term’s surahs.",
                "Longer surahs are allocated two weeks, with the surah divided at a natural break point.",
                "Students are expected to revise previously memorised surahs from earlier terms on an ongoing basis.",
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
              Programme at a Glance
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-midnight/20 dark:border-white/20">
                  <th className="py-4 px-6 font-cinzel text-gold text-lg">
                    Term
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Surah Range
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Surahs
                  </th>
                  <th className="py-4 px-6 font-cinzel text-midnight dark:text-cream text-lg">
                    Weeks
                  </th>
                </tr>
              </thead>
              <tbody className="font-sans text-midnight/80 dark:text-cream/80">
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">Term 1</td>
                  <td className="py-4 px-6">
                    Sūrat An-Nās (114) → Sūrat Az-Zalzalah (99)
                  </td>
                  <td className="py-4 px-6">16 Surahs</td>
                  <td className="py-4 px-6">8 Weeks</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">Term 2</td>
                  <td className="py-4 px-6">
                    Sūrat Al-Bayyinah (98) → Sūrat Al-Fajr (89)
                  </td>
                  <td className="py-4 px-6">10 Surahs</td>
                  <td className="py-4 px-6">8 Weeks</td>
                </tr>
                <tr className="border-b border-midnight/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">Term 3</td>
                  <td className="py-4 px-6">
                    Sūrat Al-Ghāshiyah (88) → Sūrat Al-Muṭaffifīn (83)
                  </td>
                  <td className="py-4 px-6">6 Surahs</td>
                  <td className="py-4 px-6">8 Weeks</td>
                </tr>
                <tr className="hover:bg-white/50 dark:hover:bg-navy/50 transition-colors">
                  <td className="py-4 px-6 font-semibold">Term 4</td>
                  <td className="py-4 px-6">
                    Sūrat Al-Infiṭār (82) → Sūrat An-Nabaʼ (78)
                  </td>
                  <td className="py-4 px-6">5 Surahs</td>
                  <td className="py-4 px-6">8 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Color Key */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-white dark:bg-navy border border-midnight/10 dark:border-white/10"></div>
              <span className="font-sans text-sm text-midnight/70 dark:text-muted">
                Memorisation Week (Learning new surahs)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-green-500/20 border border-green-500/30"></div>
              <span className="font-sans text-sm text-midnight/70 dark:text-muted">
                Revision Week (Full review of term)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-amber-500/20 border border-amber-500/30"></div>
              <span className="font-sans text-sm text-midnight/70 dark:text-muted">
                Examination Week (Formal assessment)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED TERM PLANS */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-4">
            Detailed Term Plans
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* TERM 1 */}
          <TermCard
            number="1"
            title="Sūrat An-Nās → Sūrat Az-Zalzalah"
            subtitle="Juzʼ ʿAmma — Part 1"
            arabic="سورة الناس — سورة الزلزلة"
            totalSurahs="16 Surahs"
            duration="8 Weeks"
            structure="6 Memorisation weeks → 1 Revision week → 1 Exam week"
            objective="To memorise the short surahs of Juzʼ ʿAmma from Sūrat An-Nās through to Sūrat Az-Zalzalah with correct pronunciation and fluency."
            weeks={[
              {
                w: 1,
                type: "memo",
                content:
                  "Sūrat An-Nās (114) • Sūrat Al-Falaq (113) • Sūrat Al-Ikhlāṣ (112)",
              },
              {
                w: 2,
                type: "memo",
                content:
                  "Sūrat Al-Masad (111) • Sūrat An-Naṣr (110) • Sūrat Al-Kāfirūn (109)",
              },
              {
                w: 3,
                type: "memo",
                content:
                  "Sūrat Al-Kawthar (108) • Sūrat Al-Māʼūn (107) • Sūrat Quraysh (106)",
              },
              {
                w: 4,
                type: "memo",
                content:
                  "Sūrat Al-Fīl (105) • Sūrat Al-Humazah (104) • Sūrat Al-ʿAṣr (103)",
              },
              {
                w: 5,
                type: "rev",
                content: "Full revision of all surahs memorised in this term",
              },
              {
                w: 6,
                type: "memo",
                content: "Sūrat At-Takāthur (102) • Sūrat Al-Qāriʼah (101)",
              },
              {
                w: 7,
                type: "memo",
                content: "Sūrat Al-ʿAādiyāt (100) • Sūrat Az-Zalzalah (99)",
              },
              {
                w: 8,
                type: "exam",
                content:
                  "End-of-term examination — full recitation and assessment",
              },
            ]}
          />

          {/* TERM 2 */}
          <TermCard
            number="2"
            title="Sūrat Al-Bayyinah → Sūrat Al-Fajr"
            subtitle="Juzʼ ʿAmma — Part 2"
            arabic="سورة البينة — سورة الفجر"
            totalSurahs="10 Surahs"
            duration="8 Weeks"
            structure="6 Memorisation weeks → 1 Revision week → 1 Exam week"
            objective="To memorise Sūrat Al-Bayyinah through Sūrat Al-Fajr with accuracy and correct tajweed, building upon the surahs learnt in Term 1."
            weeks={[
              {
                w: 1,
                type: "memo",
                content: "Sūrat Al-Bayyinah (98) • Sūrat Al-Qadr (97)",
              },
              {
                w: 2,
                type: "memo",
                content: "Sūrat Al-ʿAlaq (96) • Sūrat At-Tīn (95)",
              },
              {
                w: 3,
                type: "memo",
                content: "Sūrat Ash-Sharḥ (94) • Sūrat Aḍ-Ḍuhā (93)",
              },
              {
                w: 4,
                type: "memo",
                content: "Sūrat Al-Layl (92) • Sūrat Ash-Shams (91)",
              },
              {
                w: 5,
                type: "rev",
                content: "Full revision of all surahs memorised in this term",
              },
              { w: 6, type: "memo", content: "Sūrat Al-Balad (90) — complete" },
              { w: 7, type: "memo", content: "Sūrat Al-Fajr (89) — complete" },
              {
                w: 8,
                type: "exam",
                content:
                  "End-of-term examination — full recitation and assessment",
              },
            ]}
          />

          {/* TERM 3 */}
          <TermCard
            number="3"
            title="Sūrat Al-Ghāshiyah → Sūrat Al-Muṭaffifīn"
            subtitle="Juzʼ ʿAmma — Part 3"
            arabic="سورة الغاشية — سورة المطففين"
            totalSurahs="6 Surahs"
            duration="8 Weeks"
            structure="4 Memorisation weeks → 1 Revision week → 2 Extended weeks → 1 Exam week"
            objective="To memorise Sūrat Al-Ghāshiyah through Sūrat Al-Muṭaffifīn with correct recitation, giving appropriate attention to the longer surahs."
            note="Sūrat Al-Muṭaffifīn (83 verses) is studied over two weeks due to its length. Students are expected to master each half before proceeding."
            weeks={[
              {
                w: 1,
                type: "memo",
                content: "Sūrat Al-Ghāshiyah (88) — complete",
              },
              {
                w: 2,
                type: "memo",
                content: "Sūrat Al-Aʼlā (87) • Sūrat Aṭ-Ṯāriq (86)",
              },
              { w: 3, type: "memo", content: "Sūrat Al-Burūj (85) — complete" },
              {
                w: 4,
                type: "memo",
                content: "Sūrat Al-Inshiqāq (84) — complete",
              },
              {
                w: 5,
                type: "rev",
                content: "Full revision of all surahs memorised in this term",
              },
              {
                w: 6,
                type: "memo",
                content: "Sūrat Al-Muṭaffifīn (83) — First half (verses 1–20)",
              },
              {
                w: 7,
                type: "memo",
                content:
                  "Sūrat Al-Muṭaffifīn (83) — Second half (verses 21–36) — completion",
              },
              {
                w: 8,
                type: "exam",
                content:
                  "End-of-term examination — full recitation and assessment",
              },
            ]}
          />

          {/* TERM 4 */}
          <TermCard
            number="4"
            title="Sūrat Al-Infiṭār → Sūrat An-Nabaʼ"
            subtitle="Juzʼ ʿAmma — Part 4"
            arabic="سورة الانفطار — سورة النبأ"
            totalSurahs="5 Surahs"
            duration="8 Weeks"
            structure="3 Single-surah weeks → 2 Half-surah weeks → 2 Half-surah weeks → 1 Exam week"
            objective="To memorise Sūrat Al-Infiṭār through Sūrat An-Nabaʼ with fluency and correct tajweed, completing Juzʼ ʿAmma in this programme."
            note="Sūrat An-Nāziʼāt (46 verses) and Sūrat An-Nabaʼ (40 verses) are each divided across two weeks. Revision is built into each transition."
            weeks={[
              {
                w: 1,
                type: "memo",
                content: "Sūrat Al-Infiṭār (82) — complete",
              },
              {
                w: 2,
                type: "memo",
                content: "Sūrat At-Takwīr (81) — complete",
              },
              { w: 3, type: "memo", content: "Sūrat ʿAbasa (80) — complete" },
              {
                w: 4,
                type: "memo",
                content: "Sūrat An-Nāziʼāt (79) — First half (verses 1–26)",
              },
              {
                w: 5,
                type: "memo",
                content:
                  "Sūrat An-Nāziʼāt (79) — Second half (verses 27–46) — completion",
              },
              {
                w: 6,
                type: "memo",
                content: "Sūrat An-Nabaʼ (78) — First half (verses 1–20)",
              },
              {
                w: 7,
                type: "memo",
                content:
                  "Sūrat An-Nabaʼ (78) — Second half (verses 21–40) — completion",
              },
              {
                w: 8,
                type: "exam",
                content:
                  "End-of-term examination — full recitation and assessment",
              },
            ]}
          />
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
            Enrol your child in our complete Qurʼān memorisation programme. The
            journey of a lifetime starts with a single verse.
          </p>

          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/30 rounded-sm inline-block w-full max-w-md shadow-xl">
            <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
              Qurʼān Mentorship
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
                  Guided 4-Term Syllabus
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  Expert Tajweed Instruction
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold" />
                <span className="font-sans text-midnight/80 dark:text-cream/80">
                  End of Term Assessments
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
              TERM {number}
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2">
              {title}
            </h3>
            <p className="font-sans text-cream/70">{subtitle}</p>
          </div>
          <div className="font-amiri text-3xl md:text-4xl text-gold/90 text-right">
            {arabic}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80">
          <div>
            <strong className="text-white">Duration:</strong> {duration}
          </div>
          <div>
            <strong className="text-white">Surahs:</strong> {totalSurahs}
          </div>
          <div className="md:col-span-2">
            <strong className="text-white">Structure:</strong> {structure}
          </div>
          <div className="md:col-span-2">
            <strong className="text-white">Objective:</strong> {objective}
          </div>
          {note && (
            <div className="md:col-span-2 text-gold italic">
              <strong className="text-white not-italic">Note:</strong> {note}
            </div>
          )}
        </div>
      </div>

      <div className="p-8 md:p-10 bg-white dark:bg-transparent">
        <h4 className="font-cinzel text-xl text-midnight dark:text-cream mb-6 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gold" /> Weekly Memorisation Plan
        </h4>
        <div className="space-y-3">
          {weeks.map((week, idx) => {
            const isRev = week.type === "rev";
            const isExam = week.type === "exam";

            let bgClass = "bg-ivory dark:bg-midnight";
            let borderClass = "border-midnight/5 dark:border-white/5";
            let typeLabel = "Memorisation";
            let iconColor = "text-gold";

            if (isRev) {
              bgClass = "bg-green-500/10 dark:bg-green-500/10";
              borderClass = "border-green-500/20";
              typeLabel = "Revision";
              iconColor = "text-green-600 dark:text-green-400";
            } else if (isExam) {
              bgClass = "bg-amber-500/10 dark:bg-amber-500/10";
              borderClass = "border-amber-500/20";
              typeLabel = "★ EXAM";
              iconColor = "text-amber-600 dark:text-amber-400";
            }

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center p-4 border rounded-md ${bgClass} ${borderClass}`}
              >
                <div className="flex items-center sm:w-1/3 mb-2 sm:mb-0">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-navy flex items-center justify-center font-bold font-cinzel text-midnight dark:text-cream shadow-xs mr-4 shrink-0 border border-midnight/5 dark:border-white/5">
                    {week.w}
                  </div>
                  <span
                    className={`font-cinzel text-sm md:text-base font-semibold tracking-wider uppercase ${iconColor}`}
                  >
                    {typeLabel}
                  </span>
                </div>
                <div className="sm:w-2/3 font-sans text-midnight/80 dark:text-cream border-l sm:border-midnight/10 sm:dark:border-white/10 sm:pl-4 pl-12 sm:ml-0">
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
