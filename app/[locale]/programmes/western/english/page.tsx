"use client";

import HeroSection from "@/components/programmes/english/HeroSection";
import OverviewSection from "@/components/programmes/english/OverviewSection";
import GlanceSection from "@/components/programmes/english/GlanceSection";
import DetailedCourseSection from "@/components/programmes/english/DetailedCourseSection";
import PricingSection from "@/components/programmes/english/PricingSection";

export default function EnglishProgramme() {
  return (
    <div className="flex flex-col min-h-screen w-full min-w-0 overflow-x-hidden max-w-full ">
      <HeroSection />
      <OverviewSection />
      <GlanceSection />
      <DetailedCourseSection />
      <PricingSection />
    </div>
  );
}
