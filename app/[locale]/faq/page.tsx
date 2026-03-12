"use client";

import { motion } from "framer-motion";
import { Plus, Minus, Info, BookOpen, CreditCard } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function FaqPage() {
  const t = useTranslations("Faq");
  const [activeCategory, setActiveCategory] = useState("admissions");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: "admissions", label: t("categories.admissions"), icon: Info },
    { id: "curriculum", label: t("categories.curriculum"), icon: BookOpen },
    { id: "fees", label: t("categories.fees"), icon: CreditCard },
  ];

  type RichTextProp = {
    [key: string]: (chunks: React.ReactNode) => React.ReactNode;
  };

  const richTextComponents: RichTextProp = {
    enrolLink: (chunks) => (
      <Link
        href="/enrol"
        className="text-amber hover:text-gold font-medium underline underline-offset-2 transition-colors"
      >
        {chunks}
      </Link>
    ),
    contactLink: (chunks) => (
      <Link
        href="/contact"
        className="text-amber hover:text-gold font-medium underline underline-offset-2 transition-colors"
      >
        {chunks}
      </Link>
    ),
    islamicLink: (chunks) => (
      <Link
        href="/programmes/islamic"
        className="text-amber hover:text-gold font-medium underline underline-offset-2 transition-colors"
      >
        {chunks}
      </Link>
    ),
    westernLink: (chunks) => (
      <Link
        href="/programmes/western"
        className="text-amber hover:text-gold font-medium underline underline-offset-2 transition-colors"
      >
        {chunks}
      </Link>
    ),
    feesLink: (chunks) => (
      <Link
        href="/fees"
        className="text-amber hover:text-gold font-medium underline underline-offset-2 transition-colors"
      >
        {chunks}
      </Link>
    ),
  };

  const faqs = {
    admissions: [
      { q: t("q_admin_1"), a: t.rich("a_admin_1", richTextComponents) },
      { q: t("q_admin_2"), a: t.rich("a_admin_2", richTextComponents) },
      { q: t("q_admin_3"), a: t.rich("a_admin_3", richTextComponents) },
    ],
    curriculum: [
      { q: t("q_curr_1"), a: t.rich("a_curr_1", richTextComponents) },
      { q: t("q_curr_2"), a: t.rich("a_curr_2", richTextComponents) },
      { q: t("q_curr_3"), a: t.rich("a_curr_3", richTextComponents) },
    ],
    fees: [
      { q: t("q_fees_1"), a: t.rich("a_fees_1", richTextComponents) },
      { q: t("q_fees_2"), a: t.rich("a_fees_2", richTextComponents) },
      { q: t("q_fees_3"), a: t.rich("a_fees_3", richTextComponents) },
    ],
  };

  const handleCategorySwitch = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  // @ts-ignore
  const currentFaqs = faqs[activeCategory] || faqs.admissions;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* HEADER */}
      <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl tracking-widest mb-6 uppercase">
            {t("title")}
          </h1>
          <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* FAQ CONTENT TWO-COLUMN LAYOUT */}
      <section className="py-16 md:py-24 bg-white dark:bg-midnight flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* SIDEBAR CATEGORIES */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-32 space-y-2">
              <h3 className="font-cinzel text-2xl text-gold mb-6">
                {t("categories.admissions") ? "Categories" : "Categories"}
              </h3>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySwitch(cat.id)}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl text-start transition-all whitespace-nowrap lg:whitespace-normal shrink-0 ${
                        isActive
                          ? "bg-gold text-midnight shadow-md"
                          : "bg-ivory/50 dark:bg-accent/10 text-midnight/70 dark:text-cream/70 hover:bg-gold/10 dark:hover:bg-gold/20 hover:text-midnight dark:hover:text-cream"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-sans font-medium text-lg">
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ACCORDIONS */}
          <div className="lg:w-2/3 space-y-4">
            {currentFaqs.map((faq: any, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={`${activeCategory}-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="border border-midnight/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-ivory/30 dark:bg-accent/5"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-start px-6 py-6 flex items-center justify-between transition-colors"
                  >
                    <span className="font-sans font-medium text-xl text-midnight dark:text-cream w-[90%] pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`${isOpen ? "bg-gold text-midnight" : "bg-midnight/5 dark:bg-white/5 text-gold"} p-2 rounded-full shrink-0 transition-colors`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-midnight/5 dark:border-white/5">
                      <div className="text-midnight/80 dark:text-cream/80 font-sans text-lg leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
