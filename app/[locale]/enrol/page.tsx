"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, MailCheck, GraduationCap } from "lucide-react";

export default function EnrolPage() {
  const [programme, setProgramme] = useState("");
  const [classFormat, setClassFormat] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course],
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* HEADER */}
      <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
            Admissions
          </h1>
          <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
            Take the first step towards a holistic, uncompromising education for
            your child.
          </p>
        </div>
      </section>

      {/* ADMISSION PROCES */}
      <section className="py-24 bg-white dark:bg-midnight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
              The Process
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 inset-s-[16%] inset-e-[16%] h-px bg-gold/30"></div>

            {[
              {
                icon: ClipboardList,
                step: "Step 1",
                title: "Submit Application",
                desc: "Fill out the online enrolment form with your child's basic details and programme interest.",
              },
              {
                icon: MailCheck,
                step: "Step 2",
                title: "Assessment",
                desc: "Your child may undergo a brief assessment to determine their starting level in Arabic or Math.",
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
                className="relative bg-white dark:bg-navy border border-midnight/5 dark:border-white/5 p-8 rounded-sm shadow-xl text-center z-10 group hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 bg-ivory dark:bg-midnight text-gold mx-auto rounded-full flex items-center justify-center mb-6 border-4 border-white dark:border-navy shadow-md group-hover:scale-110 transition-transform">
                  <s.icon className="w-8 h-8" />
                </div>
                <div className="font-cinzel text-sm text-gold tracking-widest uppercase mb-2">
                  {s.step}
                </div>
                <h3 className="font-playfair text-xl text-midnight dark:text-cream mb-4">
                  {s.title}
                </h3>
                <p className="font-sans text-midnight/70 dark:text-cream/70 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-warm dark:bg-[#12221b] border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-navy p-10 md:p-14 shadow-2xl rounded-sm border-t-4 border-t-gold border-x border-b border-midnight/5 dark:border-white/5">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
                Registration Form
              </h2>
              <p className="font-sans text-midnight/70 dark:text-cream/70">
                Please provide your details below and our admissions team will
                contact you within 48 hours to secure your child's placement.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Parent Details */}
              <div className="space-y-6">
                <h3 className="font-cinzel text-lg text-gold border-b border-gold/20 pb-2">
                  Parent / Guardian Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder="e.g. Abdullah Rahman"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder="abdullah@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      City / Country
                    </label>
                    <input
                      type="text"
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder="e.g. London, UK"
                    />
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="space-y-6 pt-4">
                <h3 className="font-cinzel text-lg text-gold border-b border-gold/20 pb-2">
                  Student Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder="e.g. Yusuf Rahman"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Child's Age *
                    </label>
                    <input
                      type="number"
                      required
                      min="4"
                      max="18"
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder="e.g. 8"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Programme Interest *
                    </label>
                    <select
                      required
                      value={programme}
                      onChange={(e) => setProgramme(e.target.value)}
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans appearance-none"
                    >
                      <option value="" disabled>
                        Select a program...
                      </option>
                      <option value="dual">
                        Dual Curriculum (Islamic & Western Bundle) - Best Value
                      </option>
                      <option value="islamic">Islamic Programme Only</option>
                      <option value="western">Western Programme Only</option>
                      <option value="individual">
                        Individual Specialized Courses
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      Class Format *
                    </label>
                    <select
                      required
                      value={classFormat}
                      onChange={(e) => setClassFormat(e.target.value)}
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans appearance-none"
                    >
                      <option value="" disabled>
                        Select format...
                      </option>
                      <option value="group">
                        Group Class (Max 5 Students)
                      </option>
                      <option value="one-on-one">One-on-One Class</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Multiple Select For Individual Courses */}
                {programme === "individual" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-6 mt-4 border border-gold/30 rounded-sm bg-gold/5 dark:bg-gold/5 space-y-6"
                  >
                    <div className="text-center md:text-start">
                      <h4 className="font-cinzel text-lg text-midnight dark:text-cream tracking-wider mb-1">
                        Select Individual Courses
                      </h4>
                      <p className="text-sm font-sans text-midnight/70 dark:text-cream/70">
                        Select as many courses as you wish across disciplines.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Islamic Courses */}
                      <div>
                        <h5 className="font-sans font-bold text-sm text-amber mb-4 uppercase tracking-wider border-b border-gold/10 pb-2">
                          Islamic Sciences
                        </h5>
                        <div className="space-y-3">
                          {[
                            "Arabic",
                            "Quran Memorisation",
                            "Tawheed",
                            "Fiqh",
                            "Hadith",
                            "Mutoon",
                          ].map((c) => (
                            <label
                              key={c}
                              className="flex items-center gap-3 cursor-pointer group"
                            >
                              <div className="relative flex items-center justify-center">
                                <input
                                  type="checkbox"
                                  checked={selectedCourses.includes(c)}
                                  onChange={() => toggleCourse(c)}
                                  className="peer appearance-none w-5 h-5 border-2 border-midnight/20 dark:border-white/20 rounded-sm checked:bg-gold checked:border-gold focus:outline-hidden hover:border-gold transition-colors cursor-pointer shrink-0"
                                />
                                <svg
                                  className="absolute w-3 h-3 text-midnight pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="font-sans text-midnight/80 dark:text-cream/80 text-sm group-hover:text-gold transition-colors">
                                {c}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Western Courses */}
                      <div>
                        <h5 className="font-sans font-bold text-sm text-amber mb-4 uppercase tracking-wider border-b border-gold/10 pb-2">
                          Western Academics
                        </h5>
                        <div className="space-y-3">
                          {["Mathematics", "Sciences", "Programming"].map(
                            (c) => (
                              <label
                                key={c}
                                className="flex items-center gap-3 cursor-pointer group"
                              >
                                <div className="relative flex items-center justify-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedCourses.includes(c)}
                                    onChange={() => toggleCourse(c)}
                                    className="peer appearance-none w-5 h-5 border-2 border-midnight/20 dark:border-white/20 rounded-sm checked:bg-gold checked:border-gold focus:outline-hidden hover:border-gold transition-colors cursor-pointer shrink-0"
                                  />
                                  <svg
                                    className="absolute w-3 h-3 text-midnight pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                                <span className="font-sans text-midnight/80 dark:text-cream/80 text-sm group-hover:text-gold transition-colors">
                                  {c}
                                </span>
                              </label>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                    Additional Information / Questions
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans resize-none"
                    placeholder="Tell us about your child's current academic or Islamic level, or ask any questions here..."
                  ></textarea>
                </div>
              </div>

              <button className="w-full bg-gold text-midnight py-4 rounded-sm font-sans font-bold tracking-widest uppercase text-sm hover:bg-white border border-transparent hover:border-gold transition-all duration-300 shadow-lg hover:shadow-gold/20">
                Submit Registration Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
