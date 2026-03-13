"use client";

import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Info,
  AlertTriangle,
  X,
  CreditCard,
  User,
  Calendar,
} from "lucide-react";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

type Plan = {
  id: string;
  name: string;
  price: number;
  period: string; // 'yr'
  type: "group" | "one-on-one";
};

export default function FeesPage() {
  const t = useTranslations("Fees");
  const tEnrol = useTranslations("Enrol"); // For shared modal strings
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [modalState, setModalState] = useState<
    "idle" | "register_required" | "payment_config" | "payment_overview"
  >("idle");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [config, setConfig] = useState({
    frequency: "monthly",
    students: 1,
  });

  const [paymentRegistered, setPaymentRegistered] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Check if user has registered
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("currentUserEmail");
      if (email) {
        setPaymentRegistered(true);
      }
    }
  }, []);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    if (!paymentRegistered) {
      setModalState("register_required");
      setVerificationEmail("");
      setVerificationError("");
    } else {
      setModalState("payment_config");
    }
  };

  const handleVerifyEmail = () => {
    if (!verificationEmail.trim()) {
      setVerificationError("Please enter your email");
      return;
    }

    const registeredEmailsParam = localStorage.getItem("registeredEmails");
    const registeredEmails: string[] = registeredEmailsParam
      ? JSON.parse(registeredEmailsParam)
      : [];

    if (registeredEmails.includes(verificationEmail.toLowerCase().trim())) {
      localStorage.setItem(
        "currentUserEmail",
        verificationEmail.toLowerCase().trim(),
      );
      setPaymentRegistered(true);
      setModalState("payment_config");
      setVerificationError("");
    } else {
      // @ts-ignore
      setVerificationError(
        tEnrol("Modals.registerPrompt.emailNotFound") || "Email not found",
      );
    }
  };

  useEffect(() => {
    if (modalState !== "idle") {
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        setTimeout(() => {
          modalRef.current?.focus();
        }, 50);
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalState]);

  const calculateTotal = () => {
    if (!selectedPlan) return { total: 0, discount: "0%" };

    let base = selectedPlan.price;
    // The price in the plan object is 'per year'.
    // Logic:
    // Annual: price * students * 0.9 (10% off)
    // Semester: (price / 2) * students * 0.95 (5% off) * 2 semesters? Or just pay for 1 semester now? usually pay for 1 semester first.
    // Monthly: (price / 10 or 12?) Let's assume 10 months academic year. price / 10 * students.

    // Let's simplify for the demo and "Amount Due Now".

    let amountDue = 0;
    let discountMsg = "";

    if (config.frequency === "annual") {
      amountDue = base * config.students * 0.9;
      discountMsg = "10%";
    } else if (config.frequency === "semester") {
      // Assuming 2 semesters, so half price per semester, then 5% off that half
      amountDue = (base / 2) * config.students * 0.95;
      discountMsg = "5%";
    } else {
      // Monthly - assume 10 months
      amountDue = (base / 10) * config.students;
      discountMsg = "0%";
    }

    return { total: Math.round(amountDue), discount: discountMsg };
  };

  const totals = calculateTotal();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-cream text-midnight pt-24 relative">
      {/* 1. HERO SECTION */}
      <section className="py-24 bg-ivory dark:bg-midnight text-midnight dark:text-cream border-b border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-white dark:from-navy to-ivory dark:to-midnight pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-4xl md:text-6xl text-midnight dark:text-cream tracking-widest mb-6 uppercase">
              {t("hero.title")}
            </h1>
            <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
            <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-3xl mx-auto leading-relaxed">
              {t("hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BUNDLES (Recommended) */}
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
          {/* Islamic Bundle */}
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
                    $5,000
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
                className="w-full bg-midnight/5 dark:bg-black/20 hover:bg-midnight/10 dark:hover:bg-black/30 border-midnight/10 dark:border-white/10"
                onClick={() =>
                  handleSelectPlan({
                    id: "islamic-group",
                    name:
                      t("bundles.islamic.title") +
                      " (" +
                      t("bundles.labels.group") +
                      ")",
                    price: 5000,
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
                  handleSelectPlan({
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

          {/* Western Bundle */}
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
                    $5,000
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
                className="w-full bg-midnight/5 dark:bg-black/20 hover:bg-midnight/10 dark:hover:bg-black/30 border-midnight/10 dark:border-white/10"
                onClick={() =>
                  handleSelectPlan({
                    id: "western-group",
                    name:
                      t("bundles.western.title") +
                      " (" +
                      t("bundles.labels.group") +
                      ")",
                    price: 5000,
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
                  handleSelectPlan({
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

          {/* Both Programmes combined */}
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
                    $12,500
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
                  handleSelectPlan({
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
                  handleSelectPlan({
                    id: "dual-1on1",
                    name:
                      t("bundles.dual.title") +
                      " (" +
                      t("bundles.labels.oneOnOne") +
                      ")",
                    price: 12500,
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

      {/* 3. A LA CARTE PRICING */}
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
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                    {
                      name: t("alacarte.courses.arabic"),
                      group: "$1,500",
                      oneOnOne: "$2,250",
                    },
                    {
                      name: t("alacarte.courses.tawheed"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                    {
                      name: t("alacarte.courses.fiqh"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                    {
                      name: t("alacarte.courses.hadith"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
                    },
                    {
                      name: t("alacarte.courses.mutoon"),
                      group: "$1,200",
                      oneOnOne: "$1,800",
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
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                    {
                      name: t("alacarte.courses.science"),
                      group: "$2,000",
                      oneOnOne: "$3,000",
                    },
                    {
                      name: t("alacarte.courses.programming"),
                      group: "$2,000",
                      oneOnOne: "$3,000",
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

          {/* Sibling Discount Info */}
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

      {/* --- MODALS --- */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {modalState !== "idle" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm outline-none"
                onClick={() => setModalState("idle")}
              >
                <motion.div
                  ref={modalRef}
                  tabIndex={-1}
                  role="dialog"
                  aria-modal="true"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-white dark:bg-[#1a2c42] w-full max-w-2xl lg:max-w-3xl p-8 md:p-12 rounded-sm shadow-2xl relative border-t-4 border-gold text-center outline-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setModalState("idle")}
                      className="text-midnight/40 hover:text-midnight dark:text-cream/60 dark:hover:text-cream transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Modal Content */}
                  {modalState === "register_required" && (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                        <User size={32} />
                      </div>
                      {/* @ts-ignore */}
                      <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
                        {tEnrol("Modals.registerPrompt.title")}
                      </h3>
                      {/* @ts-ignore */}
                      <p className="font-sans text-midnight/70 dark:text-cream/70 mb-8 max-w-md mx-auto">
                        {tEnrol("Modals.registerPrompt.desc")}
                      </p>

                      <div className="flex flex-col gap-4">
                        <Link
                          href="/enrol#registration-form"
                          className="w-full bg-gold text-midnight py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                          {/* @ts-ignore */}
                          {tEnrol("Modals.registerPrompt.cta")}
                        </Link>

                        <div className="relative py-2">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-midnight/10 dark:border-white/10" />
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-[#1a2c42] px-2 text-midnight/40 dark:text-cream/40">
                              Or
                            </span>
                          </div>
                        </div>

                        {/* Email Verification */}
                        <div className="space-y-3 bg-midnight/5 dark:bg-black/20 p-4 rounded-sm">
                          {/* @ts-ignore */}
                          <label className="text-xs uppercase tracking-widest text-midnight/60 dark:text-cream/60 block text-start mb-1">
                            {/* @ts-ignore */}
                            {tEnrol("Modals.registerPrompt.verifyLabel")}
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="email"
                              value={verificationEmail}
                              onChange={(e) => {
                                setVerificationEmail(e.target.value);
                                setVerificationError("");
                              }}
                              /* @ts-ignore */
                              placeholder={tEnrol(
                                "Modals.registerPrompt.verifyExample",
                              )}
                              className="flex-1 px-3 py-2 text-sm border border-midnight/10 dark:border-white/10 rounded-sm bg-white dark:bg-midnight focus:border-gold outline-none"
                            />
                            <button
                              onClick={handleVerifyEmail}
                              className="px-4 py-2 bg-midnight dark:bg-cream text-white dark:text-midnight text-xs font-bold uppercase tracking-widest hover:opacity-90"
                            >
                              {/* @ts-ignore */}
                              {tEnrol("Modals.registerPrompt.verifyAction")}
                            </button>
                          </div>
                          {verificationError && (
                            <p className="text-red-500 text-xs text-start flex items-center gap-1">
                              <AlertTriangle size={12} /> {verificationError}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => setModalState("idle")}
                          className="text-sm text-midnight/50 hover:text-midnight dark:text-cream/50 dark:hover:text-cream underline transition-colors mt-2"
                        >
                          {/* @ts-ignore */}
                          {tEnrol("Modals.registerPrompt.cancel")}
                        </button>
                      </div>
                    </div>
                  )}

                  {modalState === "payment_config" && selectedPlan && (
                    <div className="text-start">
                      {/* @ts-ignore */}
                      <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-2 text-center">
                        {tEnrol("Modals.paymentConfig.title")}
                      </h3>
                      <p className="text-center font-sans text-base lg:text-lg text-midnight/60 dark:text-cream/60 mb-8">
                        {selectedPlan.name}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-6">
                          {/* @ts-ignore */}
                          <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-4 border-b border-light/10 pb-2">
                            {tEnrol("Modals.paymentConfig.modeLabel")}
                          </label>
                          <div className="grid grid-cols-1 gap-3">
                            <label
                              className={`flex items-center justify-between border p-3 rounded-sm cursor-pointer transition-all ${config.frequency === "annual" ? "border-gold bg-gold/5" : "border-midnight/10 dark:border-white/10"}`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="freq"
                                  checked={config.frequency === "annual"}
                                  onChange={() =>
                                    setConfig({
                                      ...config,
                                      frequency: "annual",
                                    })
                                  }
                                  className="accent-gold"
                                />
                                {/* @ts-ignore */}
                                <span className="font-sans text-sm font-medium">
                                  {tEnrol("Modals.paymentConfig.modes.annual")}
                                </span>
                              </div>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                -10%
                              </span>
                            </label>
                            <label
                              className={`flex items-center justify-between border p-3 rounded-sm cursor-pointer transition-all ${config.frequency === "semester" ? "border-gold bg-gold/5" : "border-midnight/10 dark:border-white/10"}`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="freq"
                                  checked={config.frequency === "semester"}
                                  onChange={() =>
                                    setConfig({
                                      ...config,
                                      frequency: "semester",
                                    })
                                  }
                                  className="accent-gold"
                                />
                                {/* @ts-ignore */}
                                <span className="font-sans text-sm font-medium">
                                  {tEnrol(
                                    "Modals.paymentConfig.modes.semester",
                                  )}
                                </span>
                              </div>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                -5%
                              </span>
                            </label>
                            <label
                              className={`flex items-center justify-between border p-3 rounded-sm cursor-pointer transition-all ${config.frequency === "monthly" ? "border-gold bg-gold/5" : "border-midnight/10 dark:border-white/10"}`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="freq"
                                  checked={config.frequency === "monthly"}
                                  onChange={() =>
                                    setConfig({
                                      ...config,
                                      frequency: "monthly",
                                    })
                                  }
                                  className="accent-gold"
                                />
                                {/* @ts-ignore */}
                                <span className="font-sans text-sm font-medium">
                                  {tEnrol("Modals.paymentConfig.modes.monthly")}
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* @ts-ignore */}
                          <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-4 border-b border-light/10 pb-2">
                            {tEnrol("Modals.paymentConfig.childrenLabel")}
                          </label>
                          <div className="flex items-center gap-6 justify-center md:justify-start">
                            <button
                              onClick={() =>
                                setConfig((prev) => ({
                                  ...prev,
                                  students: Math.max(1, prev.students - 1),
                                }))
                              }
                              className="w-12 h-12 border border-midnight/20 hover:border-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all text-xl"
                            >
                              -
                            </button>
                            <span className="font-cormorant text-4xl w-12 text-center">
                              {config.students}
                            </span>
                            <button
                              onClick={() =>
                                setConfig((prev) => ({
                                  ...prev,
                                  students: prev.students + 1,
                                }))
                              }
                              className="w-12 h-12 border border-midnight/20 hover:border-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all text-xl"
                            >
                              +
                            </button>
                          </div>
                          <div className="bg-ivory dark:bg-black/20 p-6 rounded-sm mt-8">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-sans text-midnight/60 dark:text-cream/60">
                                Estimated Total
                              </span>
                              <span className="font-cormorant text-2xl font-bold text-gold">
                                ${totals.total.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-xs text-midnight/40 dark:text-cream/40 italic">
                              Final summary on next step
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 flex justify-end">
                        {/* @ts-ignore */}
                        <button
                          onClick={() => setModalState("payment_overview")}
                          className="w-full md:w-auto px-12 bg-midnight dark:bg-cream text-white dark:text-midnight py-4 font-bold uppercase tracking-widest hover:opacity-90 shadow-lg hover:-translate-y-0.5 transition-all"
                        >
                          {tEnrol("Modals.paymentConfig.next")}
                        </button>
                      </div>
                    </div>
                  )}

                  {modalState === "payment_overview" && selectedPlan && (
                    <div className="text-start">
                      {/* @ts-ignore */}
                      <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-8 text-center pb-4 border-b border-light/10">
                        {tEnrol("Modals.overview.title")}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-ivory dark:bg-black/20 p-8 rounded-sm space-y-4 font-sans shadow-inner">
                          <div className="flex justify-between items-center">
                            {/* @ts-ignore */}
                            <span className="text-midnight/60 dark:text-cream/60">
                              {tEnrol("Modals.overview.plan")}
                            </span>
                            <span className="font-medium text-end text-lg">
                              {selectedPlan.name}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-midnight/60 dark:text-cream/60 text-sm italic">
                              Billing Frequency
                            </span>
                            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
                              {config.frequency}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            {/* @ts-ignore */}
                            <span className="text-midnight/60 dark:text-cream/60">
                              {tEnrol("Modals.overview.students")}
                            </span>
                            <span className="font-medium text-lg">
                              {config.students}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            {/* @ts-ignore */}
                            <span className="text-midnight/60 dark:text-cream/60">
                              {tEnrol("Modals.overview.discount")}
                            </span>
                            <span className="font-medium text-green-600">
                              -{totals.discount}
                            </span>
                          </div>
                          <div className="border-t border-midnight/10 dark:border-white/10 pt-4 flex justify-between items-center mt-4">
                            {/* @ts-ignore */}
                            <span className="font-bold text-midnight dark:text-cream uppercase tracking-wider text-lg">
                              {tEnrol("Modals.overview.total")}
                            </span>
                            <span className="font-cormorant text-4xl font-bold text-gold">
                              ${totals.total.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-xs text-center text-midnight/30 dark:text-cream/30 pt-2">
                            * Secure payment simulation
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* @ts-ignore */}
                          <button
                            onClick={() => alert("Redirecting to Paystack...")}
                            className="w-full bg-gold text-midnight py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-xl flex items-center justify-center gap-3 text-lg group"
                          >
                            <CreditCard
                              size={20}
                              className="group-hover:scale-110 transition-transform"
                            />
                            {/* @ts-ignore */}
                            {tEnrol("Modals.overview.proceed")}
                          </button>
                          <button
                            onClick={() => setModalState("payment_config")}
                            className="w-full py-3 text-sm text-midnight/50 hover:text-midnight dark:text-cream/50 dark:hover:text-cream uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                          >
                            ← {tEnrol("Modals.overview.cancel")}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
