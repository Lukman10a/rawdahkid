"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, CreditCard, User } from "lucide-react";
import { Link } from "@/i18n/routing";
import type {
  ModalState,
  PaymentConfig,
  PaymentTotals,
  Plan,
  Translator,
} from "@/components/fees/types";

type FeesModalsProps = {
  modalState: ModalState;
  selectedPlan: Plan | null;
  config: PaymentConfig;
  totals: PaymentTotals;
  verificationEmail: string;
  verificationError: string;
  tEnrolText: Translator;
  setModalState: (state: ModalState) => void;
  setConfig: (
    updater: PaymentConfig | ((prev: PaymentConfig) => PaymentConfig),
  ) => void;
  setVerificationEmail: (value: string) => void;
  setVerificationError: (value: string) => void;
  handleVerifyEmail: () => void;
};

export function FeesModals({
  modalState,
  selectedPlan,
  config,
  totals,
  verificationEmail,
  verificationError,
  tEnrolText,
  setModalState,
  setConfig,
  setVerificationEmail,
  setVerificationError,
  handleVerifyEmail,
}: FeesModalsProps) {
  const isBrowser = typeof window !== "undefined";
  const isModalOpen = modalState !== "idle";
  const closeModal = () => setModalState("idle");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
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
  }, [isModalOpen]);

  if (!isBrowser) return null;

  return createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm outline-none"
          onClick={closeModal}
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
                onClick={closeModal}
                className="text-midnight/40 hover:text-midnight dark:text-cream/60 dark:hover:text-cream transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {modalState === "register_required" && (
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                  <User size={32} />
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
                  {tEnrolText("Modals.registerPrompt.title")}
                </h3>
                <p className="font-sans text-midnight/70 dark:text-cream/70 mb-8 max-w-md mx-auto">
                  {tEnrolText("Modals.registerPrompt.desc")}
                </p>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/enrol#registration-form"
                    className="w-full bg-gold text-midnight py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {tEnrolText("Modals.registerPrompt.cta")}
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

                  <div className="space-y-3 bg-midnight/5 dark:bg-black/20 p-4 rounded-sm">
                    <label className="text-xs uppercase tracking-widest text-midnight/60 dark:text-cream/60 block text-start mb-1">
                      {tEnrolText("Modals.registerPrompt.verifyLabel")}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={verificationEmail}
                        onChange={(e) => {
                          setVerificationEmail(e.target.value);
                          setVerificationError("");
                        }}
                        placeholder={tEnrolText(
                          "Modals.registerPrompt.verifyExample",
                        )}
                        className="flex-1 px-3 py-2 text-sm border border-midnight/10 dark:border-white/10 rounded-sm bg-white dark:bg-midnight focus:border-gold outline-none"
                      />
                      <button
                        onClick={handleVerifyEmail}
                        className="px-4 py-2 bg-midnight dark:bg-cream text-white dark:text-midnight text-xs font-bold uppercase tracking-widest hover:opacity-90"
                      >
                        {tEnrolText("Modals.registerPrompt.verifyAction")}
                      </button>
                    </div>
                    {verificationError && (
                      <p className="text-red-500 text-xs text-start flex items-center gap-1">
                        <AlertTriangle size={12} /> {verificationError}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={closeModal}
                    className="text-sm text-midnight/50 hover:text-midnight dark:text-cream/50 dark:hover:text-cream underline transition-colors mt-2"
                  >
                    {tEnrolText("Modals.registerPrompt.cancel")}
                  </button>
                </div>
              </div>
            )}

            {modalState === "payment_config" && selectedPlan && (
              <div className="text-start">
                <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-2 text-center">
                  {tEnrolText("Modals.paymentConfig.title")}
                </h3>
                <p className="text-center font-sans text-base lg:text-lg text-midnight/60 dark:text-cream/60 mb-8">
                  {selectedPlan.name}
                </p>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-4 border-b border-light/10 pb-2">
                      {tEnrolText("Modals.paymentConfig.modeLabel")}
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
                          <span className="font-sans text-sm font-medium">
                            {tEnrolText("Modals.paymentConfig.modes.annual")}
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
                          <span className="font-sans text-sm font-medium">
                            {tEnrolText("Modals.paymentConfig.modes.semester")}
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
                          <span className="font-sans text-sm font-medium">
                            {tEnrolText("Modals.paymentConfig.modes.monthly")}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-sm font-bold uppercase tracking-widest text-midnight dark:text-cream block mb-4 border-b border-light/10 pb-2">
                      {tEnrolText("Modals.paymentConfig.childrenLabel")}
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
                  <button
                    onClick={() => setModalState("payment_overview")}
                    className="w-full md:w-auto px-12 bg-midnight dark:bg-cream text-white dark:text-midnight py-4 font-bold uppercase tracking-widest hover:opacity-90 shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    {tEnrolText("Modals.paymentConfig.next")}
                  </button>
                </div>
              </div>
            )}

            {modalState === "payment_overview" && selectedPlan && (
              <div className="text-start">
                <h3 className="font-cinzel text-2xl lg:text-3xl text-midnight dark:text-cream mb-8 text-center pb-4 border-b border-light/10">
                  {tEnrolText("Modals.overview.title")}
                </h3>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-ivory dark:bg-black/20 p-8 rounded-sm space-y-4 font-sans shadow-inner">
                    <div className="flex justify-between items-center">
                      <span className="text-midnight/60 dark:text-cream/60">
                        {tEnrolText("Modals.overview.plan")}
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
                      <span className="text-midnight/60 dark:text-cream/60">
                        {tEnrolText("Modals.overview.students")}
                      </span>
                      <span className="font-medium text-lg">
                        {config.students}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-midnight/60 dark:text-cream/60">
                        {tEnrolText("Modals.overview.discount")}
                      </span>
                      <span className="font-medium text-green-600">
                        -{totals.discount}
                      </span>
                    </div>
                    <div className="border-t border-midnight/10 dark:border-white/10 pt-4 flex justify-between items-center mt-4">
                      <span className="font-bold text-midnight dark:text-cream uppercase tracking-wider text-lg">
                        {tEnrolText("Modals.overview.total")}
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
                    <button
                      onClick={() => alert("Redirecting to Paystack...")}
                      className="w-full bg-gold text-midnight py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-xl flex items-center justify-center gap-3 text-lg group"
                    >
                      <CreditCard
                        size={20}
                        className="group-hover:scale-110 transition-transform"
                      />
                      {tEnrolText("Modals.overview.proceed")}
                    </button>
                    <button
                      onClick={() => setModalState("payment_config")}
                      className="w-full py-3 text-sm text-midnight/50 hover:text-midnight dark:text-cream/50 dark:hover:text-cream uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                      ← {tEnrolText("Modals.overview.cancel")}
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
  );
}
