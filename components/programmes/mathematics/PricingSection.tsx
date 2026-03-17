"use client";

import { CheckCircle, GraduationCap } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function PricingSection() {
  const t = useTranslations("ProgMathematics");

  return (
    <section className="w-full min-w-0 py-24 bg-white dark:bg-navy border-t border-midnight/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <GraduationCap className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
        <h2 className="font-cinzel text-3xl md:text-5xl text-midnight dark:text-cream mb-6">
          {t("t20")}
        </h2>
        <p className="font-sans text-lg text-midnight/80 dark:text-muted mb-12 max-w-2xl mx-auto">
          {t("t21")}
        </p>

        <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-blue-600/30 dark:border-blue-400/30 rounded-sm inline-block w-full max-w-md shadow-xl">
          <h3 className="font-playfair text-2xl text-midnight dark:text-cream mb-2">
            {t("t22")}
          </h3>
          <div className="font-cormorant text-5xl text-blue-600 dark:text-blue-400 mb-6">
            {t("t23")}
          </div>
          <ul className="text-start space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-sans text-midnight/80 dark:text-cream/80">
                {t("t24")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-sans text-midnight/80 dark:text-cream/80">
                {t("t25")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-sans text-midnight/80 dark:text-cream/80">
                {t("t26")}
              </span>
            </li>
          </ul>
          <Link href="/enrol">
            <Button variant="primary" className="w-full py-4 text-lg">
              {t("t27")}
            </Button>
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/programmes/western"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors font-sans underline underline-offset-4"
          >
            {t("t28")}
          </Link>
        </div>
      </div>
    </section>
  );
}
