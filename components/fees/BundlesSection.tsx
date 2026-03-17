"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Plan, Translator } from "@/components/fees/types";

type BundlesSectionProps = {
  t: Translator;
  groupClassButtonClass: string;
  onSelectPlan: (plan: Plan) => void;
};

export function BundlesSection({
  t,
  groupClassButtonClass,
  onSelectPlan,
}: BundlesSectionProps) {
  return (
    <section
      id="bundles"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
          {t("bundles.title")}
        </h2>
        <p className="font-sans text-midnight/70 dark:text-cream/70">
          {t("bundles.desc")}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 p-8 rounded-sm relative overflow-hidden text-midnight dark:text-cream flex flex-col"
        >
          <h3 className="font-playfair text-2xl mb-2">
            {t("bundles.islamic.title")}
          </h3>
          <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 min-h-10">
            {t("bundles.islamic.desc")}
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex justify-between items-end border-b border-midnight/5 dark:border-white/5 pb-2">
              <div>
                <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                  {t("bundles.labels.group")}
                </div>
                <div className="font-cormorant text-4xl text-midnight dark:text-cream">
                  $4,500
                  <span className="text-lg text-midnight/60 dark:text-cream/60 font-sans">
                    {t("bundles.labels.yr")}
                  </span>
                </div>
              </div>
              <div className="text-end">
                <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                  {t("bundles.labels.oneOnOne")}
                </div>
                <div className="font-cormorant text-2xl text-midnight/80 dark:text-cream/80">
                  $7,500
                  <span className="text-sm font-sans text-midnight/60 dark:text-cream/60">
                    {t("bundles.labels.yr")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-3 mb-10 font-sans text-sm text-midnight/80 dark:text-cream/80 grow">
            {[
              t("bundles.islamic.c1"),
              t("bundles.islamic.c2"),
              t("bundles.islamic.c3"),
              t("bundles.islamic.c4"),
              t("bundles.islamic.c5"),
              t("bundles.islamic.c6"),
            ].map((item, i) => (
              <li key={i} className="flex flex-row items-start gap-3">
                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3">
            <Button
              variant="ghost"
              className={groupClassButtonClass}
              onClick={() =>
                onSelectPlan({
                  id: "islamic-group",
                  name:
                    t("bundles.islamic.title") +
                    " (" +
                    t("bundles.labels.group") +
                    ")",
                  price: 4500,
                  period: "yr",
                  type: "group",
                })
              }
            >
              {t("bundles.labels.group")} - {t("bundles.labels.enrolNow")}
            </Button>
            <Button
              variant="ghost"
              className="w-full bg-white dark:bg-cream text-midnight hover:bg-white/90"
              onClick={() =>
                onSelectPlan({
                  id: "islamic-1on1",
                  name:
                    t("bundles.islamic.title") +
                    " (" +
                    t("bundles.labels.oneOnOne") +
                    ")",
                  price: 7500,
                  period: "yr",
                  type: "one-on-one",
                })
              }
            >
              {t("bundles.labels.oneOnOne")} - {t("bundles.labels.enrolNow")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 p-8 rounded-sm relative overflow-hidden text-midnight dark:text-cream flex flex-col"
        >
          <h3 className="font-playfair text-2xl mb-2">
            {t("bundles.western.title")}
          </h3>
          <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 min-h-10">
            {t("bundles.western.desc")}
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex justify-between items-end border-b border-midnight/5 dark:border-white/5 pb-2">
              <div>
                <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                  {t("bundles.labels.group")}
                </div>
                <div className="font-cormorant text-4xl text-midnight dark:text-cream">
                  $3,000
                  <span className="text-lg text-midnight/60 dark:text-cream/60 font-sans">
                    {t("bundles.labels.yr")}
                  </span>
                </div>
              </div>
              <div className="text-end">
                <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                  {t("bundles.labels.oneOnOne")}
                </div>
                <div className="font-cormorant text-2xl text-midnight/80 dark:text-cream/80">
                  $7,500
                  <span className="text-sm font-sans text-midnight/60 dark:text-cream/60">
                    {t("bundles.labels.yr")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-3 mb-10 font-sans text-sm text-midnight/80 dark:text-cream/80 grow">
            {[
              t("bundles.western.c1"),
              t("bundles.western.c2"),
              t("bundles.western.c3"),
              t("bundles.western.c4"),
              t("bundles.western.c5"),
              t("bundles.western.c6"),
            ].map((item, i) => (
              <li key={i} className="flex flex-row items-start gap-3">
                <Check className="w-4 h-4 text-midnight dark:text-cream shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3">
            <Button
              variant="ghost"
              className={groupClassButtonClass}
              onClick={() =>
                onSelectPlan({
                  id: "western-group",
                  name:
                    t("bundles.western.title") +
                    " (" +
                    t("bundles.labels.group") +
                    ")",
                  price: 3000,
                  period: "yr",
                  type: "group",
                })
              }
            >
              {t("bundles.labels.group")}
            </Button>
            <Button
              className="w-full bg-gold/10 text-gold hover:bg-gold/20 border-gold/40"
              onClick={() =>
                onSelectPlan({
                  id: "western-one-on-one",
                  name:
                    t("bundles.western.title") +
                    " (" +
                    t("bundles.labels.oneOnOne") +
                    ")",
                  price: 7500,
                  period: "yr",
                  type: "one-on-one",
                })
              }
            >
              {t("bundles.labels.oneOnOne")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-ivory dark:bg-[#12221b] border-2 border-gold/40 p-8 rounded-sm relative overflow-hidden text-midnight dark:text-cream shadow-2xl flex flex-col"
        >
          <div className="absolute top-0 inset-e-0 p-3 bg-gold/20 text-gold text-xs font-cinzel tracking-widest uppercase border-b border-s border-gold/30 font-bold">
            {t("bundles.dual.bestValue")}
          </div>
          <h3 className="font-playfair text-2xl mb-2 text-gold">
            {t("bundles.dual.title")}
          </h3>
          <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 min-h-10">
            {t("bundles.dual.desc")}
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex justify-between items-end border-b border-gold/20 pb-2">
              <div>
                <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                  {t("bundles.labels.group")}
                </div>
                <div className="font-cormorant text-4xl text-gold">
                  $8,500
                  <span className="text-lg text-midnight/60 dark:text-cream/60 font-sans">
                    {t("bundles.labels.yr")}
                  </span>
                </div>
              </div>
              <div className="text-end">
                <div className="text-xs font-cinzel text-midnight/60 dark:text-cream/60 tracking-widest uppercase mb-1">
                  {t("bundles.labels.oneOnOne")}
                </div>
                <div className="font-cormorant text-2xl text-midnight/80 dark:text-cream/80">
                  $12,750
                  <span className="text-sm font-sans text-midnight/60 dark:text-cream/60">
                    {t("bundles.labels.yr")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-3 mb-10 font-sans text-sm text-midnight/80 dark:text-cream/80 grow">
            {[
              t("bundles.dual.c1"),
              t("bundles.dual.c2"),
              t("bundles.dual.c3"),
              t("bundles.dual.c4"),
            ].map((item, i) => (
              <li key={i} className="flex flex-row items-start gap-3">
                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3">
            <Button
              variant="primary"
              className="w-full bg-gold text-midnight hover:bg-white hover:text-gold border border-gold"
              onClick={() =>
                onSelectPlan({
                  id: "dual-group",
                  name:
                    t("bundles.dual.title") +
                    " (" +
                    t("bundles.labels.group") +
                    ")",
                  price: 8500,
                  period: "yr",
                  type: "group",
                })
              }
            >
              {t("bundles.labels.group")} - {t("bundles.labels.enrolNow")}
            </Button>
            <Button
              variant="ghost"
              className="w-full bg-white dark:bg-cream text-midnight hover:bg-white/90"
              onClick={() =>
                onSelectPlan({
                  id: "dual-1on1",
                  name:
                    t("bundles.dual.title") +
                    " (" +
                    t("bundles.labels.oneOnOne") +
                    ")",
                  price: 12750,
                  period: "yr",
                  type: "one-on-one",
                })
              }
            >
              {t("bundles.labels.oneOnOne")} - {t("bundles.labels.enrolNow")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
