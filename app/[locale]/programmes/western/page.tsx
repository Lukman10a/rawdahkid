"use client";

import HeroSection from "@/components/programmes/western-overview/HeroSection";
import CoursesSection from "@/components/programmes/western-overview/CoursesSection";
import InvestmentSection from "@/components/programmes/western-overview/InvestmentSection";

export default function WesternProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      <HeroSection />
      <CoursesSection />
      <InvestmentSection />
    </div>
  );
}
