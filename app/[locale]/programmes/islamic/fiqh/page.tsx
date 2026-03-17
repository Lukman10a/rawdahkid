"use client";

import HeroSection from "@/components/programmes/fiqh/HeroSection";
import OverviewSection from "@/components/programmes/fiqh/OverviewSection";
import GlanceSection from "@/components/programmes/fiqh/GlanceSection";
import DetailedCourseSection from "@/components/programmes/fiqh/DetailedCourseSection";
import PricingSection from "@/components/programmes/fiqh/PricingSection";

export default function FiqhProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      <HeroSection />
      <OverviewSection />
      <GlanceSection />
      <DetailedCourseSection />
      <PricingSection />
    </div>
  );
}
