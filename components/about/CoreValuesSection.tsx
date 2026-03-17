"use client";

import { Award, BookOpen, Heart, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const valueIconMap = {
  value1: Award,
  value2: Shield,
  value3: BookOpen,
  value4: Heart,
} as const;

export function CoreValuesSection() {
  const t = useTranslations("About");

  const values = [
    {
      icon: valueIconMap.value1,
      title: t("values.v1_title"),
      desc: t("values.v1_desc"),
    },
    {
      icon: valueIconMap.value2,
      title: t("values.v2_title"),
      desc: t("values.v2_desc"),
    },
    {
      icon: valueIconMap.value3,
      title: t("values.v3_title"),
      desc: t("values.v3_desc"),
    },
    {
      icon: valueIconMap.value4,
      title: t("values.v4_title"),
      desc: t("values.v4_desc"),
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-4xl md:text-5xl text-midnight tracking-wider mb-6">
            {t("values.title")}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <Reveal
              key={idx}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b-4 border-gold rounded-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-ivory/ dark:bg-midnight/ flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl text-midnight mb-4">
                {value.title}
              </h3>
              <p className="font-sans text-midnight/70 text-sm leading-relaxed">
                {value.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
