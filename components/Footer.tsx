import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Instagram, Facebook, PhoneIcon as WhatsappIcon } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="bg-ivory dark:bg-midnight border-t border-midnight/ dark:border-white/ pt-20 pb-10 text-midnight dark:text-cream relative overflow-hidden">
      {/* Background Star Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center text-gold">
        {/* Placeholder for SVG pattern */}
        <svg width="400" height="400" viewBox="0 0 100 100">
          <path
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            d="M50 0 L100 50 L50 100 L0 50 Z"
          />
          <path
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            d="M0 0 L100 100 M100 0 L0 100 M50 0 L50 100 M0 50 L100 50"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-amiri text-gold/30 text-5xl md:text-6xl -mb-4 select-none pe-4">
                روضة الأطفال
              </span>
              <span className="font-cinzel text-midnight dark:text-cream text-2xl tracking-[0.2em] relative z-10">
                RAWDATUL
                <br />
                ATFAAL
              </span>
            </div>
            <p className="font-playfair italic text-midnight/ dark:text-cream/ max-w-sm text-lg">
              {t("t0")}
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors block"
                aria-label={t("t6")}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors block"
                aria-label={t("t9")}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors block"
                aria-label={t("t10")}
              >
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:ps-16">
            <h3 className="font-cinzel text-lg tracking-wider text-gold mb-6">
              {t("t11")}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors opacity-80 hover:opacity-100 font-sans text-sm tracking-wide"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors opacity-80 hover:opacity-100 font-sans text-sm tracking-wide"
                >
                  {t("t8")}
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes/islamic"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors opacity-80 hover:opacity-100 font-sans text-sm tracking-wide"
                >
                  {t("islamicProgramme")}
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes/western"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors opacity-80 hover:opacity-100 font-sans text-sm tracking-wide"
                >
                  {t("westernProgramme")}
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors opacity-80 hover:opacity-100 font-sans text-sm tracking-wide"
                >
                  {t("t4")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors opacity-80 hover:opacity-100 font-sans text-sm tracking-wide"
                >
                  {t("t12")}
                </Link>
              </li>
              <li>
                <Link
                  href="/enrol"
                  className="text-gold font-medium hover:text-amber transition-colors opacity-100 font-sans text-sm tracking-wide flex items-center"
                >
                  {t("enroll")}
                  <span className="ms-1">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-cinzel text-lg tracking-wider text-gold mb-6">
              {t("t5")}
            </h3>
            <ul className="space-y-4 text-sm font-sans tracking-wide">
              <li>
                <a
                  href="mailto:hello@rawdatulatfaal.edu"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors"
                >
                  {t("t2")}
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-midnight/ dark:text-cream/ pt-4 italic font-playfair pe-8">
                {t("t1")}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gradient-to-r from-transparent via-gold/25 to-transparent relative">
          <div className="absolute top-0 inset-s-0 w-full h-px bg-linear-to-r from-transparent via-gold/25 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-midnight/ dark:text-cream/ font-sans uppercase tracking-widest">
            <p>{t("copyright", { year: new Date().getFullYear() })}</p>
            <p className="mt-2 md:mt-0 font-cormorant text-sm">{t("t3")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
