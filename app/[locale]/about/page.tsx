"use client";

import { motion } from "framer-motion";
import { BookOpen, Compass, Shield, Star, Award, Heart } from "lucide-react";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-cream text-midnight pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-ivory dark:bg-midnight overflow-hidden">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>

        {/* Decorative Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] text-gold pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="islamic-pattern-about"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0 L80 40 L40 80 L0 40 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#islamic-pattern-about)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
              {t("hero.title")}
            </h1>
            <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-playfair italic text-2xl md:text-4xl text-amber/90 max-w-4xl mx-auto leading-relaxed">
              {t("hero.quote")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE VISION & MISSION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-14 shadow-2xl rounded-sm border border-gold/10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="absolute top-0 inset-s-0 w-2 h-full bg-gold"></div>
            <div className="flex items-center gap-4 mb-8">
              <Compass className="w-10 h-10 text-gold" />
              <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider">
                {t("mission.title")}
              </h2>
            </div>
            <p className="font-sans text-lg text-midnight/80 leading-relaxed space-y-4">
              <span className="block">
                {t("mission.p1")}
              </span>
              <span className="block mt-4">
                {t("mission.p2")}
              </span>
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-warm dark:bg-deep p-10 md:p-14 shadow-2xl rounded-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white dark:from-navy/30 to-ivory dark:to-midnight/80 pointer-events-none"></div>
            <div className="absolute top-0 inset-s-0 w-full h-2 bg-green/80"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Star className="w-10 h-10 text-midnight dark:text-cream" />
                <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider">
                  {t("vision.title")}
                </h2>
              </div>
              <p className="font-sans text-lg text-midnight/ dark:text-cream/ leading-relaxed space-y-4">
                <span className="block">
                  {t("vision.p1")}
                </span>
                <span className="block mt-4 text-amber/90 font-medium">{t("t0")}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE RAWDAH DIFFERENCE (Philosophy) */}
      <section className="py-24 bg-white dark:bg-navy text-midnight dark:text-cream border-y border-midnight/ dark:border-white/">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-cinzel text-sm text-gold tracking-[0.2em] uppercase mb-4">
                  {t("philosophy.subtitle")}
                </h2>
                <h3 className="font-playfair text-4xl md:text-5xl leading-tight">
                  {t("philosophy.title")}
                </h3>
              </div>

              <div className="w-20 h-px bg-gold/50"></div>

              <div className="font-sans text-midnight/ dark:text-cream/ text-lg leading-relaxed space-y-6">
                <p>
                  {t("philosophy.p1")}
                </p>
                <p>
                  At{" "}
                  <strong className="text-amber font-medium tracking-wide">
                    {t("philosophy.p2_bold")}
                  </strong>
                  {t("philosophy.p2_suffix")}
                </p>
                <p>
                  {t("philosophy.p3")}
                </p>
              </div>
            </motion.div>

            {/* Visual Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-125 w-full bg-warm dark:bg-deep rounded-sm border border-gold/20 overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-gold/40 via-midnight to-ivory dark:to-midnight"></div>

              {/* Abstract Representation of Dual Curriculum */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="absolute inset-s-1/2 -ms-32 w-64 h-64 border border-gold/30 rounded-full flex items-center justify-start ps-8 transition-transform duration-700 group-hover:-translate-x-4">
                  <span className="font-amiri text-4xl text-amber">الدين</span>
                </div>
                <div className="absolute inset-e-1/2 -me-32 w-64 h-64 border border-midnight/ dark:border-white/ rounded-full flex items-center justify-end pe-8 transition-transform duration-700 group-hover:translate-x-4">
                  <span className="font-cinzel text-xl text-midnight dark:text-cream tracking-widest">{t("t1")}</span>
                </div>
                <div className="z-20 w-32 h-32 bg-ivory dark:bg-midnight border-2 border-gold rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                  <Award className="w-12 h-12 text-gold" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-white dark:bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-cinzel text-4xl md:text-5xl text-midnight tracking-wider mb-6">
              {t("values.title")}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: t("values.v1_title"),
                desc: t("values.v1_desc"),
              },
              {
                icon: Shield,
                title: t("values.v2_title"),
                desc: t("values.v2_desc"),
              },
              {
                icon: BookOpen,
                title: t("values.v3_title"),
                desc: t("values.v3_desc"),
              },
              {
                icon: Heart,
                title: t("values.v4_title"),
                desc: t("values.v4_desc"),
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b-4 border-gold rounded-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-ivory/ dark:bg-midnight/ flex items-center justify-center mb-6">
                  <val.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-playfair text-2xl text-midnight mb-4">
                  {val.title}
                </h3>
                <p className="font-sans text-midnight/70 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORIGIN STORY & LEADERSHIP */}
      <section className="py-24 bg-white dark:bg-cream/10 border-t border-midnight/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-gold mx-auto mb-8 opacity-80" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-midnight tracking-wider mb-8">
            {t("origin.title")}
          </h2>
          <div className="prose prose-lg mx-auto text-midnight/80 font-sans leading-relaxed text-start md:text-center space-y-6">
            <p>
              {t("philosophy.p2_bold")} was founded circa 2021 as the foundational
              children&apos;s school under the umbrella of Markazul Bayaan. What
              started as a focused initiative has since blossomed into a global
              learning community, answering the call of families across the US,
              UK, Australia, Germany, Canada, India, Nigeria, Ghana, and beyond.
            </p>
            <p>
              {t("origin.p2")}
            </p>
            <p>
              {t("origin.p3")}
            </p>
            <p className="font-playfair italic text-xl text-amber pt-4">
              {t("origin.quote")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
