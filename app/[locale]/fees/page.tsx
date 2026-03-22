"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BundlesSection } from "@/components/fees/BundlesSection";
import { AlaCarteSection } from "@/components/fees/AlaCarteSection";
import { FeesModals } from "@/components/fees/FeesModals";
import type { ModalState, Plan } from "@/components/fees/types";
import {
  getRecordByEmail,
  getRegisteredEmails,
  normalizeEmail,
  saveSelectedPlanInDraft,
  setCurrentUserEmail,
} from "@/lib/enrolmentStorage";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function FeesPage() {
  const t = useTranslations("Fees");
  const tEnrol = useTranslations("Enrol"); // For shared modal strings
  const router = useRouter();
  const tText = t as unknown as (key: string) => string;
  const tEnrolText = tEnrol as unknown as (key: string) => string;

  const [modalState, setModalState] = useState<ModalState>("idle");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const groupClassButtonClass =
    "w-full bg-midnight/5 dark:bg-black/20 text-midnight dark:text-cream hover:bg-midnight/10 dark:hover:bg-black/30 border-midnight/10 dark:border-white/10";

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setModalState("register_required");
    setVerificationEmail("");
    setVerificationError("");
  };

  const handleStartRegistration = () => {
    if (selectedPlan) {
      saveSelectedPlanInDraft(selectedPlan);
    }
    setModalState("idle");
    router.push("/enrol#registration-form");
  };

  const handleContinuePayment = () => {
    if (selectedPlan) {
      saveSelectedPlanInDraft(selectedPlan);
    }
    setModalState("idle");
    router.push("/enrol?resume=payment#registration-form");
  };

  const handleVerifyEmail = () => {
    const normalizedEmail = normalizeEmail(verificationEmail);
    if (!normalizedEmail) {
      setVerificationError("Please enter your email");
      return;
    }

    const registeredEmails = getRegisteredEmails();

    if (registeredEmails.includes(normalizedEmail)) {
      setCurrentUserEmail(normalizedEmail);
      setVerificationError("");

      const record = getRecordByEmail(normalizedEmail);
      if (record && !record.paymentCompleted) {
        setModalState("resume_payment");
      } else {
        handleStartRegistration();
      }
    } else {
      setVerificationError(
        tEnrolText("Modals.registerPrompt.emailNotFound") || "Email not found",
      );
    }
  };

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
        verificationEmail={verificationEmail}
        verificationError={verificationError}
        tEnrolText={tEnrolText}
        setModalState={setModalState}
        setVerificationEmail={setVerificationEmail}
        setVerificationError={setVerificationError}
        handleVerifyEmail={handleVerifyEmail}
        handleStartRegistration={handleStartRegistration}
        handleContinuePayment={handleContinuePayment}
      />
    </div>
  );
}
