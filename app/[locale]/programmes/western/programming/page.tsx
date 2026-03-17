"use client";

import HeroSection from "@/components/programmes/programming/HeroSection";
import OverviewSection from "@/components/programmes/programming/OverviewSection";
import GlanceSection from "@/components/programmes/programming/GlanceSection";
import DetailedCourseSection from "@/components/programmes/programming/DetailedCourseSection";
import PricingSection from "@/components/programmes/programming/PricingSection";

export default function ProgrammingProgramme() {
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
