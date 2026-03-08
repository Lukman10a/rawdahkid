"use client";

import { motion } from "framer-motion";
import { Calculator, FlaskConical, Code2, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const courses = [
  {
    name: "Mathematics",
    icon: Calculator,
    desc: "A rigorous progression from arithmetic to advanced calculus, developing critical problem-solving skills.",
    levels: "10 Levels",
    slug: "mathematics",
  },
  {
    name: "Sciences",
    icon: FlaskConical,
    desc: "Physics, Chemistry, and Biology taught through inquiry-based learning and practical experimentation.",
    levels: "10 Levels",
    slug: "sciences",
  },
  {
    name: "Programming",
    icon: Code2,
    desc: "Computational thinking, algorithmic design, and full-stack software development.",
    levels: "10 Levels",
    slug: "programming",
  },
];

export default function WesternProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
              The Western Programme
            </h1>
            <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-midnight/70 dark:text-muted max-w-3xl mx-auto leading-relaxed">
              Equipping our students with the skills and knowledge required to
              excel and lead in the modern academic and professional world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE COURSES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
            Core Disciplines
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <Link href={`/programmes/western/${course.slug}`} key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/50 dark:bg-navy/50 border border-midnight/10 dark:border-white/10 p-10 rounded-sm hover:-translate-y-2 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-300 flex flex-col group text-center items-center h-full cursor-pointer"
              >
                <div className="mb-6 w-20 h-20 bg-midnight/5 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <course.icon className="w-10 h-10 text-midnight dark:text-cream opacity-70 group-hover:opacity-100 group-hover:text-gold transition-all" />
                </div>
                <h3 className="font-playfair text-3xl text-midnight dark:text-cream mb-4 group-hover:text-gold transition-colors">
                  {course.name}
                </h3>
                <p className="font-sans text-midnight/70 dark:text-muted leading-relaxed mb-8 grow">
                  {course.desc}
                </p>
                <div className="mt-auto text-sm font-cinzel tracking-widest text-midnight/60 dark:text-cream/60 uppercase border-t border-midnight/10 dark:border-white/10 pt-4 w-full flex justify-between items-center group-hover:text-gold transition-colors">
                  <span>{course.levels}</span>
                  <span className="font-sans text-lg">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. TUITION & BUNDLE */}
      <section className="py-24 bg-warm dark:bg-deep border-y border-midnight/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Globe className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair italic text-4xl text-midnight dark:text-cream mb-6">
            World-Class Preparation
          </h2>
          <p className="font-sans text-lg text-midnight/70 dark:text-muted mb-12">
            While Western Programme courses can be taken individually starting
            from <span className="text-amber">$2,000/year</span>, we highly
            recommend the complete bundle.
          </p>
          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/20 rounded-sm inline-block w-full max-w-2xl relative overflow-hidden text-midnight dark:text-cream">
            <div className="absolute inset-0 bg-linear-to-b from-white/50 dark:from-navy/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="font-cinzel text-2xl text-gold tracking-widest mb-2 uppercase">
                Full Western Bundle
              </h3>
              <p className="font-sans text-midnight/70 dark:text-muted mb-6">
                Mathematics, Sciences, and Programming
              </p>
              <div className="font-cormorant text-6xl text-midnight dark:text-cream mb-2">
                $5,000{" "}
                <span className="text-xl text-midnight/70 dark:text-muted font-sans">
                  / year
                </span>
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
        </div>
      </section>
    </div>
  );
}
