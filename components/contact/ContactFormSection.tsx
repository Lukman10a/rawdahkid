"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ContactFormSection() {
  const t = useTranslations("Contact");

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-navy p-10 lg:p-14 rounded-sm shadow-xl border border-midnight/5 dark:border-white/5 relative text-midnight dark:text-cream"
    >
      <h2 className="font-playfair text-3xl mb-2 text-midnight dark:text-cream">
        {t("form.title")}
      </h2>
      <p className="font-sans text-midnight/80 dark:text-cream/80 mb-8">
        {t("form.desc")}
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-midnight dark:text-cream mb-2">
            {t("form.nameLabel")} *
          </label>
          <input
            type="text"
            required
            className="w-full bg-white dark:bg-[#1a2b22] border border-midnight/10 dark:border-white/10 px-4 py-3 text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            placeholder={t("form.namePlaceholder")}
          />
        </div>
        <div>
          <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-midnight dark:text-cream mb-2">
            {t("form.emailLabel")} *
          </label>
          <input
            type="email"
            required
            className="w-full bg-white dark:bg-[#1a2b22] border border-midnight/10 dark:border-white/10 px-4 py-3 text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            placeholder={t("form.emailPlaceholder")}
          />
        </div>
        <div>
          <label className="block font-sans text-xs font-semibold uppercase tracking-widest text-midnight dark:text-cream mb-2">
            {t("form.messageLabel")} *
          </label>
          <textarea
            rows={5}
            required
            className="w-full bg-white dark:bg-[#1a2b22] border border-midnight/10 dark:border-white/10 px-4 py-3 text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
            placeholder={t("form.messagePlaceholder")}
          ></textarea>
        </div>
        <button className="w-full bg-gold text-midnight py-4 rounded-sm font-sans font-bold tracking-widest uppercase text-sm hover:bg-white border border-transparent hover:border-gold transition-all duration-300 shadow-lg hover:shadow-gold/20">
          {t("form.submitBtn")}
        </button>
      </form>
    </motion.div>
  );
}
