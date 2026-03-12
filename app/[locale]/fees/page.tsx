"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

export default function FeesPage() {
  const t = useTranslations("Fees");
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
              {t("hero.title")}
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-midnight/ dark:text-cream/ max-w-3xl mx-auto leading-relaxed">
              {t("hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BUNDLES (Recommended) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
            {t("bundles.title")}
          </h2>
          <p className="font-sans text-midnight/70 dark:text-muted">
            {t("bundles.desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Islamic Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 p-8 rounded-sm relative overflow-hidden text-midnight dark:text-cream flex flex-col"
          >
            <h3 className="font-playfair text-2xl mb-2">
              {t("bundles.islamic.title")}
            </h3>
            <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 min-h-10">
              {t("bundles.islamic.desc")}
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex justify-between items-end border-b border-midnight/5 dark:border-white/5 pb-2">
                <div>
                  <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                    {t("bundles.labels.group")}
                  </div>
                  <div className="font-cormorant text-4xl text-midnight dark:text-cream">
                    $5,000
                    <span className="text-lg text-midnight/60 dark:text-cream/60 font-sans">
                      {t("bundles.labels.yr")}
                    </span>
                  </div>
                </div>
                <div className="text-end">
                  <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                    {t("bundles.labels.oneOnOne")}
                  </div>
                  <div className="font-cormorant text-2xl text-midnight/80 dark:text-cream/80">
                    $7,500
                    <span className="text-sm font-sans text-midnight/60 dark:text-cream/60">
                      {t("bundles.labels.yr")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mb-10 font-sans text-sm text-midnight/80 dark:text-cream/80 grow">
              {[
                t("bundles.islamic.c1"),
                t("bundles.islamic.c2"),
                t("bundles.islamic.c3"),
                t("bundles.islamic.c4"),
                t("bundles.islamic.c5"),
                t("bundles.islamic.c6"),
              ].map((item, i) => (
                <li key={i} className="flex flex-row items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/enrol" className="block w-full mt-auto">
              <Button variant="primary" className="w-full">
                {t("bundles.labels.enrolNow")}
              </Button>
            </Link>
          </motion.div>

          {/* Western Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 p-8 rounded-sm relative overflow-hidden text-midnight dark:text-cream flex flex-col"
          >
            <h3 className="font-playfair text-2xl mb-2">
              {t("bundles.western.title")}
            </h3>
            <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 min-h-10">
              {t("bundles.western.desc")}
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex justify-between items-end border-b border-midnight/5 dark:border-white/5 pb-2">
                <div>
                  <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                    {t("bundles.labels.group")}
                  </div>
                  <div className="font-cormorant text-4xl text-midnight dark:text-cream">
                    $5,000
                    <span className="text-lg text-midnight/60 dark:text-cream/60 font-sans">
                      {t("bundles.labels.yr")}
                    </span>
                  </div>
                </div>
                <div className="text-end">
                  <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                    {t("bundles.labels.oneOnOne")}
                  </div>
                  <div className="font-cormorant text-2xl text-midnight/80 dark:text-cream/80">
                    $7,500
                    <span className="text-sm font-sans text-midnight/60 dark:text-cream/60">
                      {t("bundles.labels.yr")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mb-10 font-sans text-sm text-midnight/80 dark:text-cream/80 grow">
              {[
                t("bundles.western.c1"),
                t("bundles.western.c2"),
                t("bundles.western.c3"),
                t("bundles.western.c4"),
                t("bundles.western.c5"),
                t("bundles.western.c6"),
              ].map((item, i) => (
                <li key={i} className="flex flex-row items-start gap-3">
                  <Check className="w-4 h-4 text-midnight dark:text-cream shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/enrol" className="block w-full mt-auto">
              <button className="w-full border border-midnight text-midnight dark:border-cream dark:text-cream px-8 py-3 uppercase tracking-widest text-sm font-sans hover:bg-midnight hover:text-cream dark:hover:bg-cream dark:hover:text-midnight transition-colors">
                {t("bundles.labels.enrolNow")}
              </button>
            </Link>
          </motion.div>

          {/* Both Programmes combined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-ivory dark:bg-[#12221b] border-2 border-gold/40 p-8 rounded-sm relative overflow-hidden text-midnight dark:text-cream shadow-2xl flex flex-col"
          >
            <div className="absolute top-0 inset-e-0 p-3 bg-gold/20 text-gold text-xs font-cinzel tracking-widest uppercase border-b border-s border-gold/30 font-bold">
              {t("bundles.dual.bestValue")}
            </div>
            <h3 className="font-playfair text-2xl mb-2 text-gold">
              {t("bundles.dual.title")}
            </h3>
            <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 min-h-10">
              {t("bundles.dual.desc")}
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex justify-between items-end border-b border-gold/20 pb-2">
                <div>
                  <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                    {t("bundles.labels.group")}
                  </div>
                  <div className="font-cormorant text-4xl text-gold">
                    $8,500
                    <span className="text-lg text-midnight/60 dark:text-cream/60 font-sans">
                      {t("bundles.labels.yr")}
                    </span>
                  </div>
                </div>
                <div className="text-end">
                  <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                    {t("bundles.labels.oneOnOne")}
                  </div>
                  <div className="font-cormorant text-2xl text-amber">
                    $12,750
                    <span className="text-sm font-sans text-midnight/60 dark:text-cream/60">
                      {t("bundles.labels.yr")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mb-10 font-sans text-sm text-midnight/80 dark:text-cream/80 grow">
              {[
                t("bundles.dual.c1"),
                t("bundles.dual.c2"),
                t("bundles.dual.c3"),
                t("bundles.dual.c4"),
                t("bundles.dual.c5"),
              ].map((item, i) => (
                <li key={i} className="flex flex-row items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/enrol" className="block w-full mt-auto">
              <Button variant="primary" className="w-full">
                {t("bundles.labels.enrolNow")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. A LA CARTE PRICING */}
      <section className="py-24 bg-warm dark:bg-deep border-t border-midnight/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
              {t("alacarte.title")}
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 rounded-sm overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-midnight/10 dark:divide-white/10">
              <div className="p-8">
                <h3 className="font-cinzel text-xl text-gold tracking-widest mb-6 uppercase">
                  {t("alacarte.islamic")}
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: t("alacarte.courses.quran"),
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                    {
                      name: t("alacarte.courses.arabic"),
                      group: "$1,500",
                      oneOnOne: "$2,250",
                    },
                    {
                      name: t("alacarte.courses.tawheed"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                    {
                      name: t("alacarte.courses.fiqh"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                    {
                      name: t("alacarte.courses.hadith"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                    {
                      name: t("alacarte.courses.mutoon"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="flex flex-col xl:flex-row justify-between xl:items-center border-b border-midnight/5 dark:border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-playfair text-lg text-midnight dark:text-cream mb-2 xl:mb-0">
                        {course.name}
                      </span>
                      <div className="flex gap-6 text-sm font-sans">
                        <div className="text-midnight/70 dark:text-cream/70">
                          <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                            {t("bundles.labels.group")}
                          </span>
                          <span className="font-medium">{course.group}</span>
                          <span className="text-[10px]">
                            {t("bundles.labels.yr")}
                          </span>
                        </div>
                        <div className="text-midnight/70 dark:text-cream/70">
                          <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                            {t("bundles.labels.oneOnOne")}
                          </span>
                          <span className="font-medium">{course.oneOnOne}</span>
                          <span className="text-[10px]">
                            {t("bundles.labels.yr")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-cinzel text-xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
                  {t("alacarte.western")}
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: t("alacarte.courses.math"),
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                    {
                      name: t("alacarte.courses.science"),
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                    {
                      name: t("alacarte.courses.programming"),
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="flex flex-col xl:flex-row justify-between xl:items-center border-b border-midnight/5 dark:border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-playfair text-lg text-midnight dark:text-cream mb-2 xl:mb-0">
                        {course.name}
                      </span>
                      <div className="flex gap-6 text-sm font-sans">
                        <div className="text-midnight/70 dark:text-cream/70">
                          <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                            {t("bundles.labels.group")}
                          </span>
                          <span className="font-medium">{course.group}</span>
                          <span className="text-[10px]">
                            {t("bundles.labels.yr")}
                          </span>
                        </div>
                        <div className="text-midnight/70 dark:text-cream/70">
                          <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                            {t("bundles.labels.oneOnOne")}
                          </span>
                          <span className="font-medium">{course.oneOnOne}</span>
                          <span className="text-[10px]">
                            {t("bundles.labels.yr")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sibling Discount Info */}
          <div className="mt-12 bg-white dark:bg-navy border border-gold/30 p-8 rounded-sm flex flex-col md:flex-row items-start gap-6">
            <Info className="w-8 h-8 text-gold shrink-0 mt-1" />
            <div className="w-full">
              <h4 className="font-playfair text-2xl text-midnight dark:text-cream mb-4">
                {t("discounts.title")}
              </h4>

              <div className="grid md:grid-cols-2 gap-8 text-midnight/80 dark:text-cream/80 font-sans text-sm leading-relaxed mb-6">
                <div>
                  <h5 className="font-semibold text-midnight dark:text-cream mb-2">
                    {t("discounts.sibling.title")}
                  </h5>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>{t("discounts.sibling.d1")}</li>
                    <li>{t("discounts.sibling.d2")}</li>
                    <li>{t("discounts.sibling.d3")}</li>
                  </ul>
                  <p className="mt-2 text-xs italic opacity-80">
                    {t("discounts.sibling.note")}
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-midnight dark:text-cream mb-2">
                    {t("discounts.payment.title")}
                  </h5>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>{t("discounts.payment.d1")}</li>
                    <li>{t("discounts.payment.d2")}</li>
                    <li>{t("discounts.payment.d3")}</li>
                  </ul>
                </div>
              </div>

              <p className="font-sans text-sm text-midnight/70 dark:text-cream/60 py-3 border-t border-midnight/5 dark:border-white/5">
                {t("discounts.footerNote")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
