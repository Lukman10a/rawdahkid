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

import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function FeesPage() {
  const t = useTranslations("Fees");
  const tEnrol = useTranslations("Enrol"); // For shared modal strings
  const tNav = useTranslations("Navigation");
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

      {/* Strong Book a Call CTA — between bundles and à la carte */}
      <section className="py-10 bg-ivory dark:bg-midnight border-y border-gold/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-midnight/70 dark:text-cream/70 mb-4 text-lg">
            Not sure which plan fits your family? Talk to us directly.
          </p>
          <a
            href="https://calendly.com/markazulbayaan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-midnight px-8 py-3 rounded-sm text-sm font-medium tracking-wide hover:bg-amber hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            {tNav("bookCall")}
          </a>
        </div>
      </section>

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
