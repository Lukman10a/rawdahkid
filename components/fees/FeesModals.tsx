"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, User, Clock3 } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { ModalState, Plan, Translator } from "@/components/fees/types";

type FeesModalsProps = {
  modalState: ModalState;
  selectedPlan: Plan | null;
  verificationEmail: string;
  verificationError: string;
  tEnrolText: Translator;
  setModalState: (state: ModalState) => void;
  setVerificationEmail: (value: string) => void;
  setVerificationError: (value: string) => void;
  handleVerifyEmail: () => void;
  handleStartRegistration: () => void;
  handleContinuePayment: () => void;
};

export function FeesModals({
  modalState,
  selectedPlan,
  verificationEmail,
  verificationError,
  tEnrolText,
  setModalState,
  setVerificationEmail,
  setVerificationError,
  handleVerifyEmail,
  handleStartRegistration,
  handleContinuePayment,
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
                  <button
                    onClick={handleStartRegistration}
                    className="w-full bg-gold text-midnight py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {tEnrolText("Modals.registerPrompt.cta")}
                  </button>

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

            {modalState === "resume_payment" && (
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                  <Clock3 size={32} />
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
                  Continue Your Enrollment
                </h3>
                <p className="font-sans text-midnight/70 dark:text-cream/70 mb-2 max-w-md mx-auto">
                  We found your registration details and an unfinished payment.
                </p>
                {selectedPlan && (
                  <p className="font-sans text-sm text-midnight/60 dark:text-cream/60 mb-8">
                    Selected package:{" "}
                    <span className="font-semibold">{selectedPlan.name}</span>
                  </p>
                )}

                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleContinuePayment}
                    className="w-full bg-gold text-midnight py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-gold border border-transparent hover:border-gold transition-all shadow-lg"
                  >
                    Continue From Where You Stopped
                  </button>

                  <Link
                    href="/enrol#registration-form"
                    className="w-full py-3 text-sm text-midnight/60 hover:text-midnight dark:text-cream/60 dark:hover:text-cream uppercase tracking-widest transition-colors border border-midnight/10 dark:border-white/10"
                  >
                    Open Registration
                  </Link>
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
