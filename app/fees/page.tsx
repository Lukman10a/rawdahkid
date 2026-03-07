"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function FeesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-cream text-midnight pt-24">
      {/* 1. HERO SECTION */}
      <section className="py-24 bg-ivory dark:bg-midnight text-midnight dark:text-cream border-b border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-4xl md:text-6xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
              Tuition & Fees
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-midnight/ dark:text-cream/ max-w-3xl mx-auto leading-relaxed">
              Transparent pricing designed to make exceptional dual-curriculum
              education accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BUNDLES (Recommended) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider mb-4">
            Complete Programmes
          </h2>
          <p className="font-sans text-midnight/70 dark:text-muted">
            Our most comprehensive offerings for holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Islamic Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-navy border border-midnight/ dark:border-white/ p-10 rounded-sm relative overflow-hidden text-midnight dark:text-cream"
          >
            <div className="absolute top-0 right-0 p-3 bg-gold/10 text-gold text-xs font-cinzel tracking-widest uppercase border-b border-l border-gold/20">
              Popular
            </div>
            <h3 className="font-playfair text-3xl mb-2">Islamic Bundle</h3>
            <p className="font-sans text-midnight/ dark:text-cream/ mb-6 h-12">
              All 6 Islamic disciplines from foundation to advanced.
            </p>
            <div className="mb-8">
              <span className="font-cormorant text-5xl text-gold">$5,000</span>
              <span className="font-sans text-midnight/ dark:text-cream/ ml-2">/ year</span>
            </div>
            <ul className="space-y-4 mb-10 font-sans text-midnight/ dark:text-cream/">
              {[
                "Qurʾān (Hifdh & Tajweed)",
                "Arabic Language",
                "Tawheed & Aqeedah",
                "Islamic Jurisprudence (Fiqh)",
                "Hadith Studies",
                "Classical Texts (Mutoon)",
              ].map((item, i) => (
                <li key={i} className="flex flex-row items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/enrol" className="block w-full">
              <Button variant="primary" className="w-full">
                Enrol Now
              </Button>
            </Link>
          </motion.div>

          {/* Western Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gold/20 p-10 rounded-sm shadow-xl relative"
          >
            <h3 className="font-playfair text-3xl text-midnight mb-2">
              Western Bundle
            </h3>
            <p className="font-sans text-midnight/70 dark:text-muted mb-6 h-12">
              Rigorous academic progression for modern excellence.
            </p>
            <div className="mb-8">
              <span className="font-cormorant text-5xl text-midnight">
                $5,000
              </span>
              <span className="font-sans text-midnight/70 dark:text-muted ml-2">/ year</span>
            </div>
            <ul className="space-y-4 mb-10 font-sans text-midnight/80">
              {[
                "Core Mathematics",
                "Physical Sciences",
                "Biological Sciences",
                "Programming & CompSci",
                "Lab & Practical Sessions",
                "Project-Based Learning",
              ].map((item, i) => (
                <li key={i} className="flex flex-row items-start gap-3">
                  <Check className="w-5 h-5 text-midnight shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/enrol" className="block w-full">
              <button className="w-full border border-midnight text-midnight px-8 py-3 uppercase tracking-widest text-sm font-sans hover:bg-ivory dark:bg-midnight hover:text-midnight dark:text-cream transition-colors">
                Enrol Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. A LA CARTE PRICING */}
      <section className="py-24 bg-warm/ dark:bg-deep/ border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider mb-4">
              Individual Courses
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="bg-white border border-gold/10 rounded-sm overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/10">
              <div className="p-8">
                <h3 className="font-cinzel text-xl text-gold tracking-widest mb-6 uppercase">
                  Islamic Courses
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Qurʾān", price: "$2,000" },
                    { name: "Arabic Language", price: "$1,500" },
                    { name: "Tawheed", price: "$1,200" },
                    { name: "Fiqh", price: "$1,200" },
                    { name: "Hadith", price: "$1,200" },
                    { name: "Mutoon", price: "$1,200" },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-black/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-playfair text-lg text-midnight">
                        {course.name}
                      </span>
                      <span className="font-sans font-medium text-midnight/70 dark:text-muted">
                        {course.price}{" "}
                        <span className="text-xs font-normal">/yr</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-cinzel text-xl text-midnight tracking-widest mb-6 uppercase">
                  Western Courses
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Mathematics", price: "$2,000" },
                    { name: "Sciences", price: "$2,000" },
                    { name: "Programming", price: "$2,000" },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-black/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-playfair text-lg text-midnight">
                        {course.name}
                      </span>
                      <span className="font-sans font-medium text-midnight/70 dark:text-muted">
                        {course.price}{" "}
                        <span className="text-xs font-normal">/yr</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sibling Discount Info */}
          <div className="mt-12 bg-gold/5 border border-gold/20 p-6 rounded-sm flex items-start gap-4">
            <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <h4 className="font-playfair text-xl text-midnight mb-2">
                Discounts & Grants
              </h4>
              <p className="font-sans text-midnight/70 dark:text-muted leading-relaxed">
                We offer a 10% sibling discount starting from the second
                enrolled child, and an additional 10% discount for families
                paying the full annual tuition upfront. Means-tested educational
                grants may be available for eligible families upon review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
