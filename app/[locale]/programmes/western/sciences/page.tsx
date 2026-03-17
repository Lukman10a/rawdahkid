"use client";

import HeroSection from "@/components/programmes/sciences/HeroSection";
import OverviewSection from "@/components/programmes/sciences/OverviewSection";
import GlanceSection from "@/components/programmes/sciences/GlanceSection";
import DetailedCourseSection from "@/components/programmes/sciences/DetailedCourseSection";
import PricingSection from "@/components/programmes/sciences/PricingSection";

export default function SciencesProgramme() {
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
