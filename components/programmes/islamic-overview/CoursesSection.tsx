"use client";

import { motion } from "framer-motion";
import { Book } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CoursesSection() {
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
                <span className="font-sans text-lg">{">"}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
