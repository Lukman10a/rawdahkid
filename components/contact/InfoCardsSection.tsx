"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type InfoCard = {
  icon: LucideIcon;
  title: string;
  content: string[];
};

export function InfoCardsSection() {
  const t = useTranslations("Contact");

  const cards: InfoCard[] = [
    {
      icon: MapPin,
      title: t("info.campus.title"),
      content: [t("info.campus.c1"), t("info.campus.c2")],
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      content: [t("info.phone.c1"), t("info.phone.c2")],
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      content: [t("info.email.c1"), t("info.email.c2")],
    },
    {
      icon: Clock,
      title: t("info.hours.title"),
      content: [t("info.hours.c1"), t("info.hours.c2")],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="grid gap-6"
    >
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-navy p-8 border border-gold/10 dark:border-white/5 rounded-sm shadow-sm flex items-start gap-6 group hover:-translate-y-1 transition-transform"
        >
          <div className="bg-ivory dark:bg-[#1a2b22] p-4 rounded-full group-hover:bg-gold/10 transition-colors border border-transparent group-hover:border-gold/30">
            <card.icon className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="font-cinzel text-lg tracking-widest mb-2 text-midnight dark:text-cream">
              {card.title}
            </h3>
            {card.content.map((line, lineIdx) => (
              <p
                key={lineIdx}
                className="font-sans text-midnight/70 dark:text-cream/70"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
