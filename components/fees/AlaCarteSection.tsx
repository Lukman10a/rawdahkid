"use client";

import { Info } from "lucide-react";
import type { Translator } from "@/components/fees/types";

type AlaCarteSectionProps = {
  t: Translator;
};

export function AlaCarteSection({ t }: AlaCarteSectionProps) {
  return (
    <section className="py-24 bg-warm dark:bg-deep border-t border-midnight/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
            {t("alacarte.title")}
          </h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>

        <div className="bg-white dark:bg-navy border border-midnight/10 dark:border-white/10 rounded-sm overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-midnight/10 dark:divide-white/10">
            <div className="p-8">
              <h3 className="font-cinzel text-xl text-gold tracking-widest mb-6 uppercase">
                {t("alacarte.islamic")}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: t("alacarte.courses.quran"),
                    group: "$800",
                    oneOnOne: "$1,800",
                  },
                  {
                    name: t("alacarte.courses.arabic"),
                    group: "$800",
                    oneOnOne: "$1,800",
                  },
                  {
                    name: t("alacarte.courses.tawheed"),
                    group: "$800",
                    oneOnOne: "$1,500",
                  },
                  {
                    name: t("alacarte.courses.fiqh"),
                    group: "$800",
                    oneOnOne: "$1,500",
                  },
                  {
                    name: t("alacarte.courses.hadith"),
                    group: "$800",
                    oneOnOne: "$1,800",
                  },
                  {
                    name: t("alacarte.courses.mutoon"),
                    group: "$800",
                    oneOnOne: "$1,500",
                  },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="flex flex-col xl:flex-row justify-between xl:items-center border-b border-midnight/5 dark:border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-playfair text-lg text-midnight dark:text-cream mb-2 xl:mb-0">
                      {course.name}
                    </span>
                    <div className="flex gap-6 text-sm font-sans">
                      <div className="text-midnight/70 dark:text-cream/70">
                        <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                          {t("bundles.labels.group")}
                        </span>
                        <span className="font-medium">{course.group}</span>
                        <span className="text-[10px]">
                          {t("bundles.labels.yr")}
                        </span>
                      </div>
                      <div className="text-midnight/70 dark:text-cream/70">
                        <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                          {t("bundles.labels.oneOnOne")}
                        </span>
                        <span className="font-medium">{course.oneOnOne}</span>
                        <span className="text-[10px]">
                          {t("bundles.labels.yr")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-cinzel text-xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
                {t("alacarte.western")}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: t("alacarte.courses.math"),
                    group: "$1,500",
                    oneOnOne: "$2,000",
                  },
                  {
                    name: t("alacarte.courses.science"),
                    group: "$1,500",
                    oneOnOne: "$2,000",
                  },
                  {
                    name: t("alacarte.courses.programming"),
                    group: "$1,500",
                    oneOnOne: "$2,000",
                  },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="flex flex-col xl:flex-row justify-between xl:items-center border-b border-midnight/5 dark:border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-playfair text-lg text-midnight dark:text-cream mb-2 xl:mb-0">
                      {course.name}
                    </span>
                    <div className="flex gap-6 text-sm font-sans">
                      <div className="text-midnight/70 dark:text-cream/70">
                        <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                          {t("bundles.labels.group")}
                        </span>
                        <span className="font-medium">{course.group}</span>
                        <span className="text-[10px]">
                          {t("bundles.labels.yr")}
                        </span>
                      </div>
                      <div className="text-midnight/70 dark:text-cream/70">
                        <span className="text-xs uppercase tracking-widest block text-midnight/40 dark:text-cream/40 mb-0.5">
                          {t("bundles.labels.oneOnOne")}
                        </span>
                        <span className="font-medium">{course.oneOnOne}</span>
                        <span className="text-[10px]">
                          {t("bundles.labels.yr")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-navy border border-gold/30 p-8 rounded-sm flex flex-col md:flex-row items-start gap-6">
          <Info className="w-8 h-8 text-gold shrink-0 mt-1" />
          <div className="w-full">
            <h4 className="font-playfair text-2xl text-midnight dark:text-cream mb-4">
              {t("discounts.title")}
            </h4>

            <div className="grid md:grid-cols-2 gap-8 text-midnight/80 dark:text-cream/80 font-sans text-sm leading-relaxed mb-6">
              <div>
                <h5 className="font-semibold text-midnight dark:text-cream mb-2">
                  {t("discounts.sibling.title")}
                </h5>
                <ul className="space-y-1 list-disc list-inside">
                  <li>{t("discounts.sibling.d1")}</li>
                  <li>{t("discounts.sibling.d2")}</li>
                  <li>{t("discounts.sibling.d3")}</li>
                </ul>
                <p className="mt-2 text-xs italic opacity-80">
                  {t("discounts.sibling.note")}
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-midnight dark:text-cream mb-2">
                  {t("discounts.payment.title")}
                </h5>
                <ul className="space-y-1 list-disc list-inside">
                  <li>{t("discounts.payment.d1")}</li>
                  <li>{t("discounts.payment.d2")}</li>
                  <li>{t("discounts.payment.d3")}</li>
                </ul>
              </div>
            </div>

            <p className="font-sans text-sm text-midnight/70 dark:text-cream/60 py-3 border-t border-midnight/5 dark:border-white/5">
              {t("discounts.footerNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
