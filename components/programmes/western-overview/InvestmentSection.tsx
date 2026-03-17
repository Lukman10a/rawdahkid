"use client";

import { Globe } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function InvestmentSection() {
  const t = useTranslations("ProgWestern");

  return (
    <section className="py-24 bg-warm dark:bg-deep border-y border-midnight/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Globe className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
        <h2 className="font-playfair italic text-4xl text-midnight dark:text-cream mb-6">{t("investment.title")}</h2>
        <p className="font-sans text-lg text-midnight/70 dark:text-muted mb-12">
          {t("t0")}
          <span className="text-amber">{t("t2")}</span>
          {t("t1")}
        </p>
        <div className="bg-ivory dark:bg-midnight p-8 md:p-12 border border-gold/20 rounded-sm inline-block w-full max-w-2xl relative overflow-hidden text-midnight dark:text-cream">
          <div className="absolute inset-0 bg-linear-to-b from-white/50 dark:from-navy/50 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="font-cinzel text-2xl text-gold tracking-widest mb-2 uppercase">
              {t("investment.bundleTitle")}
            </h3>
            <p className="font-sans text-midnight/70 dark:text-muted mb-6">{t("investment.bundleDesc")}</p>
            <div className="font-cormorant text-6xl text-midnight dark:text-cream mb-2">
              $3,000{" "}
              <span className="text-xl text-midnight/70 dark:text-muted font-sans">{t("t3")}</span>
            </div>
            <p className="font-sans text-sm text-amber mb-8 uppercase tracking-widest">
              {t("investment.equivalent")}
            </p>
            <Link href="/fees">
              <Button variant="primary" className="px-10 py-3">
                {t("investment.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
