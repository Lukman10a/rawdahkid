"use client";

import { motion } from "framer-motion";
import { Book, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const courses = [
  {
    name: "Qurʾān",
    arabic: "القرآن الكريم",
    desc: "Memorization (Hifdh), Tajweed, and Tafseer to connect deeply with the literal word of Allah.",
    levels: "4 Terms",
  },
  {
    name: "Arabic Language",
    arabic: "اللغة العربية",
    desc: "Grammar (Nahw), Morphology (Sarf), and Literature (Adab) to understand the Deen from its original sources.",
    levels: "5 Levels",
  },
  {
    name: "Tawheed",
    arabic: "التوحيد",
    desc: "Understanding the oneness of Allah and the core beliefs of Ahlus-Sunnah wal-Jama''ah.",
    levels: "5 Levels",
  },
  {
    name: "Fiqh",
    arabic: "الفقه",
    desc: "Islamic Jurisprudence focusing on worship (Ibadat) and daily transactions (Mu''amalat).",
    levels: "6 Levels",
  },
  {
    name: "Hadith",
    arabic: "الحديث",
    desc: "Studying the prophetic traditions, their sciences, and practical application.",
    levels: "4 Levels",
  },
  {
    name: "Mutoon",
    arabic: "المتون العلمية",
    desc: "Memorization and explanation of classical foundational texts across various Islamic sciences.",
    levels: "Classical Texts",
  },
];

export default function IslamicProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-navy to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-cream tracking-widest mb-4 uppercase">
              The Islamic Programme
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-8">
              البرنامج الإسلامي
            </p>
            <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Rooted in the authentic understanding of the pious predecessors,
              our curriculum guides students from foundational knowledge to
              advanced classical sciences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE COURSES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-cream tracking-wider mb-4">
            Core Disciplines
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy/40 border border-white/5 p-8 rounded-sm hover:-translate-y-2 hover:border-gold/30 transition-all duration-300 flex flex-col group"
            >
              <div className="mb-4">
                <Book className="w-8 h-8 text-gold opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-3xl text-cream mb-1">
                {course.name}
              </h3>
              <p className="font-amiri text-gold text-2xl mb-4">
                {course.arabic}
              </p>
              <p className="font-sans text-muted leading-relaxed mb-6 grow">
                {course.desc}
              </p>
              <div className="mt-auto text-sm font-cinzel tracking-widest text-cream/60 uppercase border-t border-white/10 pt-4">
                {course.levels}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TUITION & BUNDLE */}
      <section className="py-24 bg-deep border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair italic text-4xl text-cream mb-6">
            Investment in the Hereafter
          </h2>
          <p className="font-sans text-lg text-muted mb-12">
            While courses can be taken individually starting from{" "}
            <span className="text-amber">$1,200/year</span>, we highly recommend
            the complete Islamic Programme bundle for a holistic educational
            experience.
          </p>
          <div className="bg-midnight/50 p-8 md:p-12 border border-gold/20 rounded-sm inline-block w-full max-w-2xl">
            <h3 className="font-cinzel text-2xl text-gold tracking-widest mb-2 uppercase">
              Full Islamic Bundle
            </h3>
            <p className="font-sans text-muted mb-6">
              Access to all 6 core disciplines
            </p>
            <div className="font-cormorant text-6xl text-cream mb-2">
              $5,000{" "}
              <span className="text-xl text-muted font-sans">/ year</span>
            </div>
            <p className="font-sans text-sm text-amber mb-8 uppercase tracking-widest">
              Equivalent to $416 / month
            </p>
            <Link href="/fees">
              <Button variant="primary" className="px-10 py-3">
                View Fee Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
