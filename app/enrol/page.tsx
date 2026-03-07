"use client";

import { motion } from "framer-motion";
import { ClipboardList, MailCheck, GraduationCap } from "lucide-react";

export default function EnrolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-midnight pt-24">
      {/* HEADER */}
      <section className="py-20 bg-midnight text-cream border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
            Admissions
          </h1>
          <p className="font-sans text-xl text-cream/80 max-w-2xl mx-auto">
            Take the first step towards a holistic, uncompromising education for
            your child.
          </p>
        </div>
      </section>

      {/* ADMISSION PROCES */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight tracking-wider mb-4">
              The Process
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gold/30"></div>

            {[
              {
                icon: ClipboardList,
                step: "Step 1",
                title: "Submit Application",
                desc: "Fill out the online enrolment form with your child's previous academic and Islamic records.",
              },
              {
                icon: MailCheck,
                step: "Step 2",
                title: "Assessment",
                desc: "Your child will undergo a brief assessment in Arabic reading and basic Mathematics to determine their starting level.",
              },
              {
                icon: GraduationCap,
                step: "Step 3",
                title: "Enrolment & Onboarding",
                desc: "Upon acceptance, complete the fee payment to secure the seat and receive the student welcome pack.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-white border border-gold/10 p-8 rounded-sm shadow-xl text-center z-10"
              >
                <div className="w-16 h-16 bg-navy text-gold mx-auto rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">
                  <s.icon className="w-8 h-8" />
                </div>
                <div className="font-cinzel text-sm text-gold tracking-widest uppercase mb-2">
                  {s.step}
                </div>
                <h3 className="font-playfair text-xl text-midnight mb-4">
                  {s.title}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION / PLACEHOLDER */}
      <section className="py-24 bg-deep/5 border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-14 shadow-2xl rounded-sm border-t-4 border-t-gold">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl text-midnight mb-4">
                Registration Form
              </h2>
              <p className="font-sans text-muted">
                Please provide basic details below and our admissions team will
                contact you within 48 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-midnight uppercase tracking-wider">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-black/10 px-4 py-3 bg-transparent focus:outline-hidden focus:border-gold transition-colors font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-midnight uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-black/10 px-4 py-3 bg-transparent focus:outline-hidden focus:border-gold transition-colors font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-midnight uppercase tracking-wider">
                  Programme Interest
                </label>
                <select className="w-full border border-black/10 px-4 py-3 bg-transparent focus:outline-hidden focus:border-gold transition-colors font-sans text-midnight/70">
                  <option>Both (Islamic & Western Bundle)</option>
                  <option>Islamic Programme Only</option>
                  <option>Western Programme Only</option>
                  <option>Individual Courses</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-midnight uppercase tracking-wider">
                  Additional Information/Questions
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-black/10 px-4 py-3 bg-transparent focus:outline-hidden focus:border-gold transition-colors font-sans"
                  placeholder="Tell us about your child's current level..."
                ></textarea>
              </div>
              <button className="w-full bg-midnight text-cream py-4 font-sans tracking-widest uppercase text-sm hover:bg-gold hover:text-midnight transition-colors duration-300">
                Submit Registration Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
