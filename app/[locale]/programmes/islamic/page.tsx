"use client";

import HeroSection from "@/components/programmes/islamic-overview/HeroSection";
import CoursesSection from "@/components/programmes/islamic-overview/CoursesSection";
import InvestmentSection from "@/components/programmes/islamic-overview/InvestmentSection";

export default function IslamicProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      <HeroSection />
      <CoursesSection />
      <InvestmentSection />
    </div>
  );
}
