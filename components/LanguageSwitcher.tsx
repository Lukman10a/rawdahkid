"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      // @ts-expect-error - Route forwarding handles the locale
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={cn(
        "flex items-center space-x-2 text-midnight/80 dark:text-cream/80 hover:text-gold transition-colors text-sm uppercase tracking-wider",
        className,
      )}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
