"use client";

import { motion } from "framer-motion";
import { Book, Award } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";



export default function IslamicProgramme() {
  const t = useTranslations("ProgIslamic");
  const courses = [
    {
      name: t("courses.quran.name"),
      arabic: "القرآن الكريم",
      desc: t("courses.quran.desc"),
      levels: t("courses.quran.levels"),
      slug: "quran-memorisation",
    },
    {
      name: t("courses.arabic.name"),
      arabic: "اللغة العربية",
      desc: t("courses.arabic.desc"),
      levels: t("courses.arabic.levels"),
      slug: "arabic",
    },
    {
      name: t("courses.tawheed.name"),
      arabic: "التوحيد",
      desc: t("courses.tawheed.desc"),
      levels: t("courses.tawheed.levels"),
      slug: "tawheed",
    },
    {
      name: t("courses.fiqh.name"),
      arabic: "الفقه",
      desc: t("courses.fiqh.desc"),
      levels: t("courses.fiqh.levels"),
      slug: "fiqh",
    },
    {
      name: t("courses.hadith.name"),
      arabic: "الحديث",
      desc: t("courses.hadith.desc"),
      levels: t("courses.hadith.levels"),
      slug: "hadith",
    },
    {
      name: t("courses.mutoon.name"),
      arabic: "المتون العلمية",
      desc: t("courses.mutoon.desc"),
      levels: t("courses.mutoon.levels"),
      slug: "mutoon",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-midnight/10 dark:border-white/10">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none"></div>
        <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-midnight dark:text-cream tracking-widest mb-4 uppercase">
              {t("hero.title")}
            </h1>
            <p className="font-amiri text-gold text-3xl md:text-5xl mb-8">
              البرنامج الإسلامي
            </p>
            <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-midnight/70 dark:text-muted max-w-3xl mx-auto leading-relaxed">
              {t("hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE COURSES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
            {t("core.title")}
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <Link href={`/programmes/islamic/${course.slug}`} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/50 dark:bg-navy/50 border border-midnight/10 dark:border-white/10 p-8 rounded-sm hover:-translate-y-2 hover:border-gold/30 transition-all duration-300 flex flex-col group h-full cursor-pointer"
              >
                <div className="mb-4">
                  <Book className="w-8 h-8 text-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-playfair text-3xl text-midnight dark:text-cream mb-1 group-hover:text-gold transition-colors">
                  {course.name}
                </h3>
                <p className="font-amiri text-gold text-2xl mb-4">
                  {course.arabic}
                </p>
                <p className="font-sans text-midnight/70 dark:text-muted leading-relaxed mb-6 grow">
                  {course.desc}
                </p>
                <div className="mt-auto text-sm font-cinzel tracking-widest text-midnight/60 dark:text-cream/60 uppercase border-t border-midnight/10 dark:border-white/10 pt-4 flex justify-between items-center group-hover:text-gold transition-colors">
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
          <Award className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair italic text-4xl text-midnight dark:text-cream mb-6">
            {t("investment.title")}
          </h2>
          <p className="font-sans text-lg text-midnight/70 dark:text-muted mb-12">
            While courses can be taken individually starting from{" "}
            <span className="text-amber">{t("t1")}</span>{t("t0")}</p>
          <div className="bg-ivory/ dark:bg-midnight/ p-8 md:p-12 border border-gold/20 rounded-sm inline-block w-full max-w-2xl">
            <h3 className="font-cinzel text-2xl text-gold tracking-widest mb-2 uppercase">
              {t("investment.bundleTitle")}
            </h3>
            <p className="font-sans text-midnight/70 dark:text-muted mb-6">
              {t("investment.bundleDesc")}
            </p>
            <div className="font-cormorant text-6xl text-midnight dark:text-cream mb-2">
              $5,000{" "}
              <span className="text-xl text-midnight/70 dark:text-muted font-sans">{t("t2")}</span>
            </div>
            <p className="font-sans text-sm text-amber mb-8 uppercase tracking-widest">
              {t("investment.equivalent")}
            </p>
            <Link href="/fees">
              <Button variant="primary" className="px-10 py-3">
                {t("investment.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
