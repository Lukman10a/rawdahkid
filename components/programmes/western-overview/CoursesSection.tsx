"use client";

import { motion } from "framer-motion";
import { Calculator, FlaskConical, Code2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CoursesSection() {
  const t = useTranslations("ProgWestern");

  const courses = [
    {
      name: t("courses.math.name"),
      icon: Calculator,
      desc: t("courses.math.desc"),
      levels: t("courses.math.levels"),
      slug: "mathematics",
    },
    {
      name: t("courses.science.name"),
      icon: FlaskConical,
      desc: t("courses.science.desc"),
      levels: t("courses.science.levels"),
      slug: "sciences",
    },
    {
      name: t("courses.programming.name"),
      icon: Code2,
      desc: t("courses.programming.desc"),
      levels: t("courses.programming.levels"),
      slug: "programming",
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
                <span className="font-sans text-lg">{">"}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
