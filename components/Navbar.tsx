"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-ivory/95 dark:bg-midnight/95 backdrop-blur-md border-midnight/10 dark:border-white/10 py-4 shadow-sm"
            : "bg-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="font-amiri text-gold text-2xl leading-none group-hover:text-amber transition-colors">
                  روضة الأطفال
                </span>
                <span className="font-cinzel text-midnight dark:text-cream text-sm tracking-[0.2em] group-hover:text-white transition-colors">
                  {t("t14")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors text-sm uppercase tracking-wider relative group"
              >
                {t("home")}
                <span className="absolute -bottom-1 inset-s-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-midnight/80 dark:text-cream/80 hover:text-gold transition-colors text-sm uppercase tracking-wider relative group"
              >
                {t("about")}
                <span className="absolute -bottom-1 inset-s-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {/* Dropdown */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsProgrammesOpen(true)}
                onMouseLeave={() => setIsProgrammesOpen(false)}
              >
                <div className="flex items-center space-x-1 text-midnight/ dark:text-cream/ hover:text-gold transition-colors text-sm uppercase tracking-wider py-2">
                  <span>{t("programmes")}</span>
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute bottom-1 inset-s-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </div>

                {/* Dropdown Menu */}
                <div
                  className={cn(
                    "absolute top-full inset-s-0 w-56 bg-white dark:bg-navy border border-midnight/ dark:border-white/ shadow-xl rounded-sm py-2 transition-all duration-200 origin-top-left",
                    isProgrammesOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible",
                  )}
                >
                  <Link
                    href="/programmes/islamic"
                    className="block px-4 py-3 text-sm text-midnight/ dark:text-cream/ hover:text-gold hover:bg-midnight/ dark:bg-white/ transition-colors"
                  >
                    {t("islamicProgramme")}
                  </Link>
                  <Link
                    href="/programmes/western"
                    className="block px-4 py-3 text-sm text-midnight/ dark:text-cream/ hover:text-gold hover:bg-midnight/ dark:bg-white/ transition-colors"
                  >
                    {t("westernProgramme")}
                  </Link>
                </div>
              </div>
              <Link
                href="/fees"
                className="text-midnight/ dark:text-cream/ hover:text-gold transition-colors text-sm uppercase tracking-wider relative group"
              >
                {t("fees")}
                <span className="absolute -bottom-1 inset-s-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="flex items-center space-x-4 border-s border-midnight/20 dark:border-cream/20 ps-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              {/* CTA */}
              <Link
                href="/enrol"
                className="bg-gold text-midnight px-6 py-2 rounded-sm text-sm font-medium tracking-wide hover:bg-amber hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {t("enroll")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-midnight dark:text-cream hover:text-gold transition-colors"
                aria-label={t("t16")}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-60 bg-ivory dark:bg-midnight flex flex-col transition-transform duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-midnight/ dark:border-white/">
          <div className="flex flex-col">
            <span className="font-amiri text-gold text-2xl leading-none">
              روضة الأطفال
            </span>
            <span className="font-cinzel text-midnight dark:text-cream text-sm tracking-[0.2em]">
              {t("t14")}
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-midnight dark:text-cream hover:text-gold transition-colors"
            aria-label={t("t15")}
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center space-y-8 p-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-cinzel text-midnight dark:text-cream hover:text-gold transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-cinzel text-midnight dark:text-cream hover:text-gold transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/programmes/islamic"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-cinzel text-midnight dark:text-cream hover:text-gold transition-colors text-center"
          >
            {t("islamicProgramme")}
          </Link>
          <Link
            href="/programmes/western"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-cinzel text-midnight dark:text-cream hover:text-gold transition-colors text-center"
          >
            {t("westernProgramme")}
          </Link>
          <Link
            href="/fees"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-cinzel text-midnight dark:text-cream hover:text-gold transition-colors"
          >
            {t("fees")}
          </Link>

          <div className="flex space-x-6 items-center">
            <LanguageSwitcher />
          </div>
          <div className="pt-8 w-full max-w-xs">
            <Link
              href="/enrol"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-gold text-midnight text-center py-4 rounded-sm text-lg font-medium tracking-wide hover:bg-amber transition-colors"
            >
              {t("enroll")}
            </Link>
          </div>
        </div>

        {/* Subtle geometric background pattern for mobile menu */}
        <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center -z-10 text-gold">
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
      </div>
    </>
  );
}
