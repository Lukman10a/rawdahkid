"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BundlesSection } from "@/components/fees/BundlesSection";
import { AlaCarteSection } from "@/components/fees/AlaCarteSection";
import { FeesModals } from "@/components/fees/FeesModals";
import type { ModalState, PaymentConfig, Plan } from "@/components/fees/types";

import { useTranslations } from "next-intl";

export default function FeesPage() {
  const t = useTranslations("Fees");
  const tEnrol = useTranslations("Enrol"); // For shared modal strings
  const tText = t as unknown as (key: string) => string;
  const tEnrolText = tEnrol as unknown as (key: string) => string;

  const [modalState, setModalState] = useState<ModalState>("idle");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [config, setConfig] = useState<PaymentConfig>({
    frequency: "monthly",
    students: 1,
  });

  const [paymentRegistered, setPaymentRegistered] = useState(() => {
    if (typeof window === "undefined") return false;
    return Boolean(localStorage.getItem("currentUserEmail"));
  });
  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const groupClassButtonClass =
    "w-full bg-midnight/5 dark:bg-black/20 text-midnight dark:text-cream hover:bg-midnight/10 dark:hover:bg-black/30 border-midnight/10 dark:border-white/10";

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
      setVerificationError(
        tEnrolText("Modals.registerPrompt.emailNotFound") || "Email not found",
      );
    }
  };

  const calculateTotal = () => {
    if (!selectedPlan) return { total: 0, discount: "0%" };

    const base = selectedPlan.price;
    // The price in the plan object is 'per year'.
    // Logic:
    // Annual: price * students * 0.9 (10% off)
    // Semester: (price / 2) * students * 0.95 (5% off) * 2 semesters? Or just pay for 1 semester now? usually pay for 1 semester first.
    // Monthly: (price / 10 or 12?) Let's assume 10 months academic year. price / 10 * students.

    // Let's simplify for the demo and "Amount Due Now".

    let amountDue = 0;
    let discountMsg = "";

    if (config.frequency === "annual") {
      amountDue = base * config.students;
      discountMsg = "0%";
    } else if (config.frequency === "semester") {
      amountDue = (base / 2) * config.students;
      discountMsg = "0%";
    } else {
      amountDue = (base / 12) * config.students;
      discountMsg = "0%";
    }

    return {
      total: Math.round(amountDue),
      discount: discountMsg,
    };
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

      <BundlesSection
        t={tText}
        groupClassButtonClass={groupClassButtonClass}
        onSelectPlan={handleSelectPlan}
      />

      <AlaCarteSection t={tText} />

      <FeesModals
        modalState={modalState}
        selectedPlan={selectedPlan}
        config={config}
        totals={totals}
        verificationEmail={verificationEmail}
        verificationError={verificationError}
        tEnrolText={tEnrolText}
        setModalState={setModalState}
        setConfig={setConfig}
        setVerificationEmail={setVerificationEmail}
        setVerificationError={setVerificationError}
        handleVerifyEmail={handleVerifyEmail}
      />
    </div>
  );
}
