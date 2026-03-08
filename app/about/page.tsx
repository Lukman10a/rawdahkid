"use client";

import { motion } from "framer-motion";
import { BookOpen, Compass, Shield, Star, Award, Heart } from "lucide-react";

export default function AboutPage() {
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
              Our Story
            </h1>
            <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-playfair italic text-2xl md:text-4xl text-amber/90 max-w-4xl mx-auto leading-relaxed">
              &quot;Nurturing a generation grounded in their faith, fully
              equipped for the world.&quot;
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
            <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
            <div className="flex items-center gap-4 mb-8">
              <Compass className="w-10 h-10 text-gold" />
              <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider">
                Our Mission
              </h2>
            </div>
            <p className="font-sans text-lg text-midnight/80 leading-relaxed space-y-4">
              <span className="block">
                To provide an uncompromising educational experience where
                traditional Islamic sciences and modern academics are taught
                with equal rigor and excellence.
              </span>
              <span className="block mt-4">
                We strive to nurture students who are proud of their Muslim
                identity, deeply connected to the Qurʾān, and capable of leading
                with integrity in any field they choose to pursue.
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
            <div className="absolute top-0 left-0 w-full h-2 bg-green/80"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Star className="w-10 h-10 text-midnight dark:text-cream" />
                <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider">
                  Our Vision
                </h2>
              </div>
              <p className="font-sans text-lg text-midnight/ dark:text-cream/ leading-relaxed space-y-4">
                <span className="block">
                  To be the standard-bearer for holistic Islamic education,
                  producing graduates who embody the prophetic character
                  (Akhlaq).
                </span>
                <span className="block mt-4 text-amber/90 font-medium">
                  We envision a future where our alumni stand as pillars in
                  their communities—possessing deep knowledge of their Deen and
                  demonstrating exceptional competence in worldly sciences.
                </span>
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
                  Our Philosophy
                </h2>
                <h3 className="font-playfair text-4xl md:text-5xl leading-tight">
                  No Compromise Between Deen & Duniya
                </h3>
              </div>

              <div className="w-20 h-px bg-gold/50"></div>

              <div className="font-sans text-midnight/ dark:text-cream/ text-lg leading-relaxed space-y-6">
                <p>
                  For too long, Muslim families have been forced into a false
                  dichotomy: choose a rigorous academic school with a secular
                  environment, or choose a traditional Islamic school that lacks
                  academic competitiveness.
                </p>
                <p>
                  At{" "}
                  <strong className="text-amber font-medium tracking-wide">
                    Rawdatul Atfaal
                  </strong>
                  , we reject this compromise.
                </p>
                <p>
                  Our dual-curriculum approach ensures that when a child is
                  learning mathematics or programming, they are doing so with
                  the same intensity as when they are memorizing the Qurʾān or
                  studying Fiqh. Excellence is not segmented; it is a holistic
                  mindset we cultivate across all disciplines.
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
                <div className="absolute left-1/2 -ml-32 w-64 h-64 border border-gold/30 rounded-full flex items-center justify-start pl-8 transition-transform duration-700 group-hover:-translate-x-4">
                  <span className="font-amiri text-4xl text-amber">الدين</span>
                </div>
                <div className="absolute right-1/2 -mr-32 w-64 h-64 border border-midnight/ dark:border-white/ rounded-full flex items-center justify-end pr-8 transition-transform duration-700 group-hover:translate-x-4">
                  <span className="font-cinzel text-xl text-midnight dark:text-cream tracking-widest">
                    DUNIYA
                  </span>
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
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence (Ihsan)",
                desc: "Striving for perfection in both our worship and our studies, knowing Allah loves when a task is done well.",
              },
              {
                icon: Shield,
                title: "Integrity (Amanah)",
                desc: "Upholding honesty, immense responsibility, and moral uprightness in every action.",
              },
              {
                icon: BookOpen,
                title: "Authenticity",
                desc: "Unapologetically rooting our knowledge and methodology in the Qurʾān and the authentic Sunnah.",
              },
              {
                icon: Heart,
                title: "Brotherhood",
                desc: "Fostering deeply rooted care, empathy, and community among students, staff, and parents.",
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
            How We Began
          </h2>
          <div className="prose prose-lg mx-auto text-midnight/80 font-sans leading-relaxed text-left md:text-center space-y-6">
            <p>
              Rawdatul Atfaal was founded circa 2021 as the foundational
              children&apos;s school under the umbrella of Markazul Bayaan. What
              started as a focused initiative has since blossomed into a global
              learning community, answering the call of families across the US,
              UK, Australia, Germany, Canada, India, Nigeria, Ghana, and beyond.
            </p>
            <p>
              Our Islamic curriculum is firmly rooted in authenticity. We are
              proud to feature highly qualified Islamic tutors who have spent
              years studying under the recognized scholars of this era, adhering
              strictly to the methodology of the pious predecessors (Salaf).
            </p>
            <p>
              Simultaneously, we ensure no compromise in secular academics. Our
              Western education department is spearheaded by highly experienced
              educators specializing in mathematics, programming, and the
              sciences, giving our students the absolute best of both worlds.
            </p>
            <p className="font-playfair italic text-xl text-amber pt-4">
              &quot;We didn&apos;t just want to build a school; we wanted to
              revive a tradition of holistic, unapologetic scholarship.&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
