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
    levels: "6 Levels",
  },
  {
    name: "Sciences",
    icon: FlaskConical,
    desc: "Physics, Chemistry, and Biology taught through inquiry-based learning and practical experimentation.",
    levels: "6 Levels",
  },
  {
    name: "Programming",
    icon: Code2,
    desc: "Computational thinking, algorithmic design, and full-stack software development.",
    levels: "6 Levels",
  },
];

export default function WesternProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-cream text-midnight pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 z-0 opacity-[0.02] text-midnight pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-midnight tracking-widest mb-6 uppercase">
              The Western Programme
            </h1>
            <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-midnight/80 max-w-3xl mx-auto leading-relaxed">
              Equipping our students with the skills and knowledge required to
              excel and lead in the modern academic and professional world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE COURSES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider mb-4">
            Core Disciplines
          </h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gold/10 p-10 rounded-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group text-center items-center"
            >
              <div className="mb-6 w-20 h-20 bg-ivory/ dark:bg-midnight/ rounded-full flex items-center justify-center">
                <course.icon className="w-10 h-10 text-midnight opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-3xl text-midnight mb-4">
                {course.name}
              </h3>
              <p className="font-sans text-midnight/70 leading-relaxed mb-8 grow">
                {course.desc}
              </p>
              <div className="mt-auto text-sm font-cinzel tracking-widest text-gold uppercase border-t border-gold/10 pt-4 w-full">
                {course.levels}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TUITION & BUNDLE */}
      <section className="py-24 bg-white border-y border-gold/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Globe className="w-12 h-12 text-midnight/30 mx-auto mb-6" />
          <h2 className="font-playfair italic text-4xl text-midnight mb-6">
            World-Class Preparation
          </h2>
          <p className="font-sans text-lg text-midnight/70 mb-12">
            While Western Programme courses can be taken individually starting
            from <span className="text-midnight font-bold">$2,000/year</span>,
            we highly recommend the complete bundle.
          </p>
          <div className="bg-ivory dark:bg-midnight p-8 md:p-12 shadow-2xl rounded-sm inline-block w-full max-w-2xl relative overflow-hidden text-midnight dark:text-cream">
            <div className="absolute inset-0 bg-linear-to-b from-white dark:from-navy/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="font-cinzel text-2xl text-midnight dark:text-cream tracking-widest mb-2 uppercase">
                Full Western Bundle
              </h3>
              <p className="font-sans text-midnight/ dark:text-cream/ mb-6">
                Mathematics, Sciences, and Programming
              </p>
              <div className="font-cormorant text-6xl text-gold mb-2">
                $5,000{" "}
                <span className="text-xl text-midnight/ dark:text-cream/ font-sans">/ year</span>
              </div>
              <p className="font-sans text-sm text-midnight/ dark:text-cream/ mb-8 uppercase tracking-widest">
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
