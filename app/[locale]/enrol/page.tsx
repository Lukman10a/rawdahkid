"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  MailCheck,
  GraduationCap,
  X,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { countries } from "@/lib/countries";

// --- Types ---
type FormData = {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentCity: string;
  parentCountry: string; // ISO code
  studentName: string;
  studentAge: string;
  programme: string;
  classFormat: string;
  additionalInfo: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function EnrolPage() {
  const t = useTranslations("Enrol");
  const router = useRouter();

  // --- State ---
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentCity: "",
    parentCountry: "GB",
    studentName: "",
    studentAge: "",
    programme: "",
    classFormat: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<"idle" | "success" | "failure">(
    "idle",
  );
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalState !== "idle" && modalRef.current) {
      // Simple timeout to ensure modal is rendered and animation started
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    }
  }, [modalState]);
  const [failureReason, setFailureReason] = useState("");

  // --- Handlers ---
  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course],
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Correctly get phone digits (strip non-digits)
    const phoneInputDigits = formData.parentPhone.replace(/\D/g, "");
    const selectedCountry = countries.find(
      (c) => c.code === formData.parentCountry,
    );
    const dialCodeDigits = selectedCountry?.dialCode.replace(/\D/g, "") || "";
    const totalPhoneLength = dialCodeDigits.length + phoneInputDigits.length;

    if (!formData.parentName.trim())
      newErrors.parentName = t("form.errors.required");
    if (!formData.parentEmail.trim()) {
      newErrors.parentEmail = t("form.errors.required");
    } else if (!emailRegex.test(formData.parentEmail)) {
      newErrors.parentEmail = t("form.errors.invalidEmail");
    }

    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = t("form.errors.required");
    } else if (totalPhoneLength < 10) {
      newErrors.parentPhone = t("form.errors.phoneShort");
    } else if (!/^[\d\s-]*$/.test(formData.parentPhone)) {
      // Only digits, spaces, dashes (no + allowed in input box because + is in country code)
      newErrors.parentPhone = t("form.errors.phoneInvalid");
    }

    if (!formData.studentName.trim())
      newErrors.studentName = t("form.errors.required");
    if (!formData.studentAge.trim())
      newErrors.studentAge = t("form.errors.required");
    if (!formData.programme) newErrors.programme = t("form.errors.required");
    if (!formData.classFormat)
      newErrors.classFormat = t("form.errors.required");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      // Check for duplicate email in localStorage (Simulated Backend)
      const registeredEmailsParam = localStorage.getItem("registeredEmails");
      const registeredEmails: string[] = registeredEmailsParam
        ? JSON.parse(registeredEmailsParam)
        : [];

      if (registeredEmails.includes(formData.parentEmail.toLowerCase())) {
        setIsSubmitting(false);
        setFailureReason(t("form.errors.emailExists"));
        setModalState("failure");
      } else {
        // Success
        registeredEmails.push(formData.parentEmail.toLowerCase());
        localStorage.setItem(
          "registeredEmails",
          JSON.stringify(registeredEmails),
        );
        // Also set 'currentUserEmail' session akin to logging in
        localStorage.setItem(
          "currentUserEmail",
          formData.parentEmail.toLowerCase(),
        );

        setIsSubmitting(false);
        setModalState("success");
      }
    }, 1500);
  };

  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.parentName &&
    formData.parentEmail &&
    formData.parentPhone &&
    formData.studentName &&
    formData.studentAge &&
    formData.programme &&
    formData.classFormat;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 relative">
      {/* HEADER */}
      <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
            {t("header.title")}
          </h1>
          <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto">
            {t("header.desc")}
          </p>
        </div>
      </section>

      {/* ADMISSION PROCES (Rearranged Order: Submit -> Enrol -> Assessment) */}
      <section className="py-24 bg-white dark:bg-midnight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl text-midnight dark:text-cream tracking-wider mb-4">
              {t("process.title")}
            </h2>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 inset-s-[16%] inset-e-[16%] h-px bg-gold/30"></div>

            {[
              {
                icon: ClipboardList,
                key: "s1",
              },
              {
                icon: MailCheck, // Step 2: Enrolment (Used to be Assessment logic visually, but icon fits Enrol/Mail)
                key: "s2",
              },
              {
                icon: GraduationCap, // Step 3: Assessment
                key: "s3",
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
                {/* @ts-ignore */}
                <div className="font-cinzel text-sm text-gold tracking-widest uppercase mb-2">
                  {t(`process.steps.${s.key}.step`)}
                </div>
                {/* @ts-ignore */}
                <h3 className="font-playfair text-xl text-midnight dark:text-cream mb-4">
                  {t(`process.steps.${s.key}.title`)}
                </h3>
                {/* @ts-ignore */}
                <p className="font-sans text-midnight/70 dark:text-cream/70 text-sm leading-relaxed">
                  {t(`process.steps.${s.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section
        className="py-24 bg-warm dark:bg-[#12221b] border-t border-gold/10 relative"
        id="registration-form"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-navy p-10 md:p-14 shadow-2xl rounded-sm border-t-4 border-t-gold border-x border-b border-midnight/5 dark:border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="text-center mb-10 relative z-10">
              <h2 className="font-playfair text-3xl md:text-4xl text-midnight dark:text-cream mb-4">
                {t("form.title")}
              </h2>
              <p className="font-sans text-midnight/70 dark:text-cream/70">
                {t("form.desc")}
              </p>
            </div>

            <form
              className="space-y-8 relative z-10"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Parent Details */}
              <div className="space-y-6">
                <h3 className="font-cinzel text-lg text-gold border-b border-gold/20 pb-2">
                  {t("form.parent.title")}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.parent.name")} *
                    </label>
                    <input
                      name="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${errors.parentName ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                      placeholder={t("form.parent.namePlaceholder")}
                    />
                    {errors.parentName && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.parent.email")} *
                    </label>
                    <input
                      name="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${errors.parentEmail ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                      placeholder={t("form.parent.emailPlaceholder")}
                    />
                    {errors.parentEmail && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.parentEmail}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.parent.phone")} *
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="parentCountry"
                        value={formData.parentCountry}
                        onChange={handleInputChange}
                        className="w-30 border px-2 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans text-sm border-midnight/10 dark:border-white/10"
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.code} ({c.dialCode})
                          </option>
                        ))}
                      </select>
                      <input
                        name="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9\s-]/g, ""); // Restrict to numbers, spaces, dash
                          setFormData((prev) => ({
                            ...prev,
                            parentPhone: val,
                          }));
                          if (errors.parentPhone)
                            setErrors((prev) => {
                              const newErr = { ...prev };
                              delete newErr.parentPhone;
                              return newErr;
                            });
                        }}
                        className={`flex-1 border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${errors.parentPhone ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                        placeholder="123 456 7890"
                      />
                    </div>
                    {errors.parentPhone && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.parentPhone}
                      </p>
                    )}
                  </div>
                  {/* City */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.parent.city")}
                    </label>
                    <input
                      name="parentCity"
                      type="text"
                      value={formData.parentCity}
                      onChange={handleInputChange}
                      className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans"
                      placeholder={t("form.parent.cityPlaceholder")}
                    />
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="space-y-6 pt-4">
                <h3 className="font-cinzel text-lg text-gold border-b border-gold/20 pb-2">
                  {t("form.student.title")}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.student.name")} *
                    </label>
                    <input
                      name="studentName"
                      type="text"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${errors.studentName ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                      placeholder={t("form.student.namePlaceholder")}
                    />
                    {errors.studentName && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.studentName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.student.age")} *
                    </label>
                    <input
                      name="studentAge"
                      type="number"
                      min="4"
                      max="18"
                      value={formData.studentAge}
                      onChange={handleInputChange}
                      className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans ${errors.studentAge ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                      placeholder={t("form.student.agePlaceholder")}
                    />
                    {errors.studentAge && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.studentAge}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.student.programme")} *
                    </label>
                    <div className="relative">
                      <select
                        name="programme"
                        value={formData.programme}
                        onChange={handleInputChange}
                        className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans appearance-none cursor-pointer ${errors.programme ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                      >
                        <option value="" disabled>
                          {t("form.student.programmeSelect")}
                        </option>
                        <option value="dual">
                          {t("form.student.progDual")}
                        </option>
                        <option value="islamic">
                          {t("form.student.progIslamic")}
                        </option>
                        <option value="western">
                          {t("form.student.progWestern")}
                        </option>
                        <option value="individual">
                          {t("form.student.progIndividual")}
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg
                          className="h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {errors.programme && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.programme}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                      {t("form.student.format")} *
                    </label>
                    <div className="relative">
                      <select
                        name="classFormat"
                        value={formData.classFormat}
                        onChange={handleInputChange}
                        className={`w-full border px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 transition-all font-sans appearance-none cursor-pointer ${errors.classFormat ? "border-red-500 ring-1 ring-red-500" : "border-midnight/10 dark:border-white/10 focus:border-gold"}`}
                      >
                        <option value="" disabled>
                          {t("form.student.formatSelect")}
                        </option>
                        <option value="group">
                          {t("form.student.formatGroup")}
                        </option>
                        <option value="one-on-one">
                          {t("form.student.formatOneOnOne")}
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg
                          className="h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {errors.classFormat && (
                      <p className="text-red-500 text-xs mt-1 font-sans flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.classFormat}
                      </p>
                    )}
                  </div>
                </div>

                {/* Conditional Multiple Select For Individual Courses */}
                {formData.programme === "individual" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-6 mt-4 border border-gold/30 rounded-sm bg-gold/5 dark:bg-gold/5 space-y-6"
                  >
                    <div className="text-center md:text-start">
                      <h4 className="font-cinzel text-lg text-midnight dark:text-cream tracking-wider mb-1">
                        {t("form.student.individualCourses.title")}
                      </h4>
                      <p className="text-sm font-sans text-midnight/70 dark:text-cream/70">
                        {t("form.student.individualCourses.desc")}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Islamic Courses */}
                      <div>
                        <h5 className="font-sans font-bold text-sm text-amber mb-4 uppercase tracking-wider border-b border-gold/10 pb-2">
                          {t("form.student.individualCourses.islamicTitle")}
                        </h5>
                        <div className="space-y-3">
                          {[
                            t("form.student.individualCourses.arabic"),
                            t("form.student.individualCourses.quran"),
                            t("form.student.individualCourses.tawheed"),
                            t("form.student.individualCourses.fiqh"),
                            t("form.student.individualCourses.hadith"),
                            t("form.student.individualCourses.mutoon"),
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
                          {t("form.student.individualCourses.westernTitle")}
                        </h5>
                        <div className="space-y-3">
                          {[
                            t("form.student.individualCourses.math"),
                            t("form.student.individualCourses.science"),
                            t("form.student.individualCourses.programming"),
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
                    </div>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="font-sans text-sm font-semibold text-midnight dark:text-cream uppercase tracking-wider">
                    {t("form.student.additional")}
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full border border-midnight/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-[#1a2b22] text-midnight dark:text-cream rounded-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-sans resize-none"
                    placeholder={t("form.student.additionalPlaceholder")}
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button
                  disabled={isSubmitting || (!isFormValid && false)} // Let validation function handle the error display on click
                  className={`w-full py-4 rounded-sm font-sans font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-lg flex items-center justify-center ${
                    isSubmitting
                      ? "bg-midnight/10 text-midnight/40 dark:bg-white/10 dark:text-white/40 cursor-not-allowed"
                      : "bg-gold text-midnight hover:bg-white hover:text-gold border border-transparent hover:border-gold hover:shadow-gold/20"
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-5 h-5 mr-2" />
                  ) : (
                    t("form.submit")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- MODALS --- */}
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
                className="bg-white dark:bg-[#1a2c42] w-full max-w-lg p-8 md:p-12 rounded-sm shadow-2xl relative border-t-4 border-gold text-center outline-none"
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

                {modalState === "success" && (
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                      <CheckCircle size={40} />
                    </div>
                    {/* @ts-ignore */}
                    <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
                      {t("Modals.success.title")}
                    </h3>
                    {/* @ts-ignore */}
                    <p className="font-sans text-midnight/70 dark:text-cream/70 mb-8">
                      {t("Modals.success.desc")}
                    </p>
                    <Link
                      href="/fees#bundles"
                      onClick={() => setModalState("idle")}
                      className="btn-primary w-full bg-gold text-midnight py-3 font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors inline-block leading-12"
                    >
                      {/* @ts-ignore */}
                      {t("Modals.success.proceed")}
                    </Link>
                  </div>
                )}

                {modalState === "failure" && (
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                      <AlertTriangle size={40} />
                    </div>
                    {/* @ts-ignore */}
                    <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream mb-4">
                      {t("Modals.failure.title")}
                    </h3>
                    <p className="font-sans text-red-500 mb-8 font-medium">
                      {failureReason}
                    </p>
                    {/* Logic to show different button if it's "Email Exists" vs Generic Error */}
                    {/* @ts-ignore */}
                    {failureReason === t("form.errors.emailExists") ? (
                      <div className="w-full space-y-3">
                        <button
                          onClick={() => router.push("/fees#bundles")}
                          className="w-full bg-midnight dark:bg-cream text-white dark:text-midnight py-3 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                        >
                          Proceed to Payment
                        </button>
                        <button
                          onClick={() => setModalState("idle")}
                          className="w-full border border-midnight/10 dark:border-white/10 py-3 text-sm text-midnight/60 dark:text-cream/60 hover:text-midnight dark:hover:text-cream uppercase tracking-wider"
                        >
                          Close
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setModalState("idle")}
                        className="w-full bg-midnight dark:bg-white text-white dark:text-midnight py-3 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                      >
                        {/* @ts-ignore */}
                        {t("Modals.failure.retry")}
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
