"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("Contact");
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* HEADER */}
      <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
            {t("header.title")}
          </h1>
          <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
            {t("header.desc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6"
            >
              {[
                {
                  icon: MapPin,
                  title: t("info.campus.title"),
                  content: [t("info.campus.c1"), t("info.campus.c2")],
                },
                {
                  icon: Phone,
                  title: t("info.phone.title"),
                  content: [
                    t("info.phone.c1"),
                    t("info.phone.c2"),
                  ],
                },
                {
                  icon: Mail,
                  title: t("info.email.title"),
                  content: [
                    t("info.email.c1"),
                    t("info.email.c2"),
                  ],
                },
                {
                  icon: Clock,
                  title: t("info.hours.title"),
                  content: [
                    t("info.hours.c1"),
                    t("info.hours.c2"),
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-navy p-8 border border-gold/10 dark:border-white/5 rounded-sm shadow-sm flex items-start gap-6 group hover:-translate-y-1 transition-transform"
                >
                  <div className="bg-ivory dark:bg-[#1a2b22] p-4 rounded-full group-hover:bg-gold/10 transition-colors border border-transparent group-hover:border-gold/30">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg tracking-widest mb-2 text-midnight dark:text-cream">
                      {item.title}
                    </h3>
                    {item.content.map((line, idx) => (
                      <p
                        key={idx}
                        className="font-sans text-midnight/70 dark:text-cream/70"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick Contact Form */}
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
          </div>
        </div>
      </section>
    </div>
  );
}
