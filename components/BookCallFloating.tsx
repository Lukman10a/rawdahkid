"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Calendar, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function BookCallFloating() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const isAdminRoute = Boolean(pathname && /\/admin(?:\/|$)/.test(pathname));
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isAdminRoute || isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-inline-end-4 z-40 flex items-center gap-2">
      <a
        href="https://calendly.com/markazulbayaan"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-gold text-midnight pl-4 pr-5 py-3 rounded-full shadow-xl hover:bg-amber hover:scale-105 hover:shadow-2xl transition-all duration-300 font-medium text-sm tracking-wide"
        aria-label={t("bookCall")}
      >
        <span className="w-8 h-8 bg-midnight/10 rounded-full flex items-center justify-center group-hover:bg-midnight/20 transition-colors">
          <Calendar className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">{t("bookCall")}</span>
        <span className="sm:hidden">Book Call</span>
      </a>
      <button
        onClick={() => setIsDismissed(true)}
        className="w-8 h-8 bg-midnight/80 dark:bg-white/10 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-midnight dark:hover:bg-white/20 transition-colors shadow-lg"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
