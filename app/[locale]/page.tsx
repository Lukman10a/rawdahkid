"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ChevronDown, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const t = useTranslations("Hero");
  const h = useTranslations("Home");
  const t_isl = useTranslations("ProgIslamic.courses");
  const t_wst = useTranslations("ProgWestern.courses");
  const testimonials = [
    {
      quote: h("testimonials.t1.quote"),
      author: h("testimonials.t1.author"),
      location: h("testimonials.t1.role"),
    },
    {
      quote: h("testimonials.t2.quote"),
      author: h("testimonials.t2.author"),
      location: h("testimonials.t2.role"),
    },
  ];
  const [mounted, setMounted] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const numTestimonials = testimonials.length;

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % numTestimonials);
    }, 6000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [numTestimonials]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-ivory dark:from-midnight to-navy pt-20">
        <div className="absolute inset-0 z-0 opacity-[0.04] text-gold pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="islamic-pattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M30 0 L60 30 L30 60 L0 30 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-gold/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, staggerChildren: 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.h1 className="flex flex-col items-center mb-6">
                <span className="font-cinzel text-midnight dark:text-cream text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-widest leading-tight">
                  {t("title1")}
                </span>
                <span className="font-playfair italic text-amber text-3xl sm:text-5xl md:text-6xl lg:text-[72px] mt-2">
                  {t("title2")}
                </span>
              </motion.h1>

              <motion.p className="font-amiri text-amber/80 text-xl md:text-2xl mb-8 tracking-wider">
                {t("arabicSubtitle")}
              </motion.p>
              <motion.p className="text-xs md:text-sm text-amber/60 font-cinzel tracking-widest mb-8 uppercase -mt-6">
                {t("hadithQuote")}
              </motion.p>

              <motion.p className="font-sans text-midnight/70 dark:text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                {t("description")}
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link href="/programmes/islamic">
                  <Button variant="primary" className="group flex items-center">
                    {t("exploreButton")}
                    <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/fees">
                  <Button variant="ghost">{t("downloadFeesButton")}</Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-10 inset-s-1/2 -translate-x-1/2 z-10 animate-pulse">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-warm dark:bg-deep border-y border-midnight/ dark:border-white/ py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            {[
              { number: "9", label: h("stats.programmes") },
              { number: "5", label: h("stats.age") },
              { number: "6", label: h("stats.levels") },
              { number: "100%", label: h("stats.commitment") },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <span className="font-playfair text-5xl md:text-6xl text-amber mb-2">
                  {stat.number}
                </span>
                <span className="font-cinzel text-xs md:text-sm text-midnight/70 dark:text-muted tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SCHOOL STORY */}
      <section className="bg-white dark:bg-cream text-midnight py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative ps-6 md:ps-10">
              <div className="absolute inset-s-0 top-0 bottom-0 w-px bg-gold"></div>
              <Quote className="text-gold w-12 h-12 mb-6 opacity-50" />
              <blockquote className="font-playfair italic text-3xl md:text-4xl leading-snug text-midnight mb-8">
                {h("story.quote")}
              </blockquote>
              <div className="space-y-6 text-midnight/80 font-sans leading-relaxed text-lg">
                <p>{h("story.p1")}</p>
                <p>{h("story.p2")}</p>
              </div>
            </div>

            <div className="relative h-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center text-gold/20">
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 100 100"
                  className="animate-[spin_60s_linear_infinite]"
                >
                  <path
                    d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TWO PROGRAMMES */}
      <section className="bg-ivory dark:bg-midnight py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream tracking-wider mb-4">
              {h("dualCurriculum.title")}
            </h2>
            <div className="w-24 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/programmes/islamic" className="block h-full">
              <div className="h-full group relative bg-white/ dark:bg-navy/ border border-midnight/ dark:border-white/ rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 p-10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                  </svg>
                </div>

                <h3 className="font-cinzel text-2xl tracking-widest text-midnight dark:text-cream mb-2">
                  {h("dualCurriculum.islamic.title")}
                </h3>
                <p className="font-amiri text-gold text-xl mb-6">
                  العلوم الشرعية
                </p>

                <p className="font-sans text-midnight/70 dark:text-muted mb-8 text-sm uppercase tracking-wide">
                  {h("dualCurriculum.islamic.courses")}
                </p>

                <div className="mt-auto flex flex-col items-center space-y-4 w-full">
                  <div className="text-midnight/ dark:text-cream/ font-cormorant text-lg">
                    {h("dualCurriculum.islamic.indivFrom")}{" "}
                    <span className="text-amber">$1,200</span>{" "}
                    {h("fees.perYear")}
                    <br />
                    {h("dualCurriculum.islamic.bundleFrom")}{" "}
                    <span className="text-gold font-bold">$5,000</span>
                  </div>
                  <div className="w-full text-center py-3 border border-gold text-gold group-hover:bg-gold group-hover:text-midnight transition-colors tracking-wide text-sm font-medium uppercase mt-4 block">
                    {h("dualCurriculum.islamic.explore")}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/programmes/western" className="block h-full">
              <div className="h-full group relative bg-[#12221b] border border-midnight/ dark:border-white/ rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-green/50 hover:shadow-2xl hover:shadow-green/10 p-10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-linear-to-br from-green/20 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-gold gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity flex justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>

                <h3 className="font-cinzel text-2xl tracking-widest text-midnight dark:text-cream mb-2">
                  {h("dualCurriculum.western.title")}
                </h3>
                <p className="font-amiri text-gold text-xl mb-6">
                  العلوم العصرية
                </p>

                <p className="font-sans text-midnight/70 dark:text-muted mb-8 text-sm uppercase tracking-wide">
                  {h("all_courses_title")}
                </p>

                <div className="mt-auto flex flex-col items-center space-y-4 w-full">
                  <div className="text-midnight/ dark:text-cream/ font-cormorant text-lg">
                    {h("dualCurriculum.islamic.indivFrom")}{" "}
                    <span className="text-amber">$2,000</span>{" "}
                    {h("fees.perYear")}
                    <br />
                    {h("dualCurriculum.islamic.bundleFrom")}{" "}
                    <span className="text-gold font-bold">$5,000</span>
                  </div>
                  <div className="w-full text-center py-3 border border-gold text-gold group-hover:bg-gold group-hover:text-midnight transition-colors tracking-wide text-sm font-medium uppercase mt-4 block">
                    {h("dualCurriculum.western.explore")}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL COURSE CARDS */}
      <section className="bg-ivory dark:bg-midnight pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h3 className="font-cinzel text-xl text-midnight/ dark:text-cream/ uppercase tracking-widest ps-4 border-s border-gold/50">
            {h("all_courses_title")}
          </h3>
        </div>

        <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory px-4 md:px-8 gap-6 max-w-[100vw]">
          {[
            {
              name: t_isl("quran.name"),
              color: "border-t-green",
              levels: t_isl("quran.levels"),
              price: "$2,000",
              link: "/programmes/islamic/quran-memorisation",
            },
            {
              name: t_isl("arabic.name"),
              color: "border-t-amber",
              levels: t_isl("arabic.levels"),
              price: "$1,500",
              link: "/programmes/islamic/arabic",
            },
            {
              name: t_isl("tawheed.name"),
              color: "border-t-blue-500",
              levels: t_isl("tawheed.levels"),
              price: "$1,200",
              link: "/programmes/islamic/tawheed",
            },
            {
              name: t_isl("fiqh.name"),
              color: "border-t-purple",
              levels: t_isl("fiqh.levels"),
              price: "$1,200",
              link: "/programmes/islamic/fiqh",
            },
            {
              name: t_isl("hadith.name"),
              color: "border-t-rust",
              levels: t_isl("hadith.levels"),
              price: "$1,200",
              link: "/programmes/islamic/hadith",
            },
            {
              name: t_isl("mutoon.name"),
              color: "border-t-[#556b2f]",
              levels: t_isl("mutoon.levels"),
              price: "$1,200",
              link: "/programmes/islamic/mutoon",
            },
            {
              name: t_wst("math.name"),
              color: "border-t-white",
              levels: t_wst("math.levels"),
              price: "$2,000",
              link: "/programmes/western/mathematics",
            },
            {
              name: t_wst("science.name"),
              color: "border-t-green",
              levels: t_wst("science.levels"),
              price: "$2,000",
              link: "/programmes/western/sciences",
            },
            {
              name: t_wst("programming.name"),
              color: "border-t-purple",
              levels: t_wst("programming.levels"),
              price: "$2,000",
              link: "/programmes/western/programming",
            },
          ].map((course, idx) => (
            <Link href={course.link} key={idx} className="snap-center block">
              <div
                className={`min-w-70 sm:min-w-80 bg-white/ dark:bg-navy/ p-6 rounded-sm border border-midnight/ dark:border-white/ h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/30 ${course.color} border-t-2 group`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-playfair text-2xl text-midnight dark:text-cream">
                    {course.name}
                  </h4>
                  <span className="text-midnight/30 dark:text-cream/30 group-hover:text-gold transition-colors font-sans">
                    {h("all_courses_title")}
                  </span>
                </div>
                <p className="font-sans text-midnight/70 dark:text-muted text-sm mb-6">
                  {course.levels}
                </p>
                <div className="font-cormorant text-xl text-amber">
                  {h("from_price", { price: course.price })}
                  <span className="text-sm text-midnight/70 dark:text-muted">
                    {h("fees.perYear")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="bg-warm dark:bg-deep py-24 border-t border-midnight/ dark:border-white/ relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream tracking-wider mb-16">
            {h("testimonials.title")}
          </h2>

          <div className="relative min-h-62.5 flex items-center justify-center">
            <Quote className="absolute top-0 inset-s-0 w-24 h-24 text-gold/10 -translate-x-6 -translate-y-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <p className="font-playfair italic text-2xl md:text-4xl text-midnight/ dark:text-cream/ leading-relaxed mb-8">
                  &quot;{testimonials[testimonialIndex].quote}&quot;
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-px bg-gold/50 mb-4"></div>
                  <p className="font-cinzel text-gold tracking-widest text-sm mb-1 uppercase">
                    {testimonials[testimonialIndex].author}
                  </p>
                  <p className="font-sans text-midnight/70 dark:text-muted text-sm">
                    {testimonials[testimonialIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-8 inset-s-1/2 -translate-x-1/2 flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === testimonialIndex
                      ? "bg-gold w-6"
                      : "w-2 bg-midnight/20 dark:bg-white/20 hover:bg-midnight/40 dark:hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEE SUMMARY TEASER */}
      <section className="bg-white dark:bg-cream py-24 border-y border-gold/10 text-midnight relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight tracking-wider mb-6">
            {h("fees.title")}
          </h2>
          <p className="font-sans text-midnight/70 max-w-2xl mx-auto mb-12 text-lg">
            {h("fees.description")}
          </p>

          <div className="bg-white rounded-md shadow-2xl p-8 md:p-12 mb-10 border border-gold/20 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 inset-e-0 w-32 h-32 bg-gold/5 rounded-es-full"></div>

            <div className="text-sm font-cinzel text-gold tracking-widest mb-4 uppercase">
              {h("fees.bundleName")}
            </div>
            <div className="font-cormorant text-5xl md:text-7xl text-midnight mb-2 font-medium">
              $5,000{" "}
              <span className="text-xl md:text-2xl text-midnight/50 font-sans">
                {h("fees.perYear")}
              </span>
            </div>
            <p className="text-midnight/60 mb-10 italic font-playfair text-lg">
              {h("fees.monthlyEquiv")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-sans tracking-wider uppercase text-midnight/50 mb-10">
              <span className="px-4 py-2 bg-ivory/ dark:bg-midnight/ rounded-sm">
                {h("fees.monthlyTag")}
              </span>
              <span className="px-4 py-2 bg-ivory/ dark:bg-midnight/ rounded-sm">
                {h("fees.semesterTag")}
              </span>
              <span className="px-4 py-2 bg-gold/10 text-gold font-bold rounded-sm border border-gold/20">
                {h("fees.annualTag")}
              </span>
            </div>

            <Link href="/fees">
              <Button variant="primary" className="w-full sm:w-auto px-12 py-4">
                {h("fees.seeGrid")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="relative py-32 bg-ivory dark:bg-midnight overflow-hidden border-t-[3px] border-t-gold/50">
        <div className="absolute top-0 inset-s-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 inset-s-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-white dark:from-navy/50 to-ivory dark:to-midnight -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair italic text-4xl md:text-6xl text-midnight dark:text-cream mb-6 leading-tight">
            {h("cta.quote")
              .split("\\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </h2>
          <p className="font-sans text-midnight/70 dark:text-muted text-xl mb-12">
            {h("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/enrol">
              <Button variant="primary" className="px-10 py-4 text-lg">
                {h("cta.enrol")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="px-10 py-4 text-lg">
                {h("cta.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
