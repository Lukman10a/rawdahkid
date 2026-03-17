"use client";

import { Award } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function InvestmentSection() {
  const t = useTranslations("ProgIslamic");

  return (
    <section className="py-24 bg-warm dark:bg-deep border-y border-midnight/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Award className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
        <h2 className="font-playfair italic text-4xl text-midnight dark:text-cream mb-6">
          {t("investment.title")}
        </h2>
        <p className="font-sans text-lg text-midnight/70 dark:text-muted mb-12">
          While courses can be taken individually starting from{" "}
          <span className="text-amber">{t("t1")}</span>
          {t("t0")}
        </p>
        <div className="bg-ivory/ dark:bg-midnight/ p-8 md:p-12 border border-gold/20 rounded-sm inline-block w-full max-w-2xl">
          <h3 className="font-cinzel text-2xl text-gold tracking-widest mb-2 uppercase">
            {t("investment.bundleTitle")}
          </h3>
          <p className="font-sans text-midnight/70 dark:text-muted mb-6">
            {t("investment.bundleDesc")}
          </p>
          <div className="font-cormorant text-6xl text-midnight dark:text-cream mb-2">
            $4,500{" "}
            <span className="text-xl text-midnight/70 dark:text-muted font-sans">
              {t("t2")}
            </span>
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
    </section>
  );
}
