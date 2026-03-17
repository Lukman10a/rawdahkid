"use client";

import HeroSection from "@/components/programmes/mathematics/HeroSection";
import OverviewSection from "@/components/programmes/mathematics/OverviewSection";
import GlanceSection from "@/components/programmes/mathematics/GlanceSection";
import DetailedCourseSection from "@/components/programmes/mathematics/DetailedCourseSection";
import PricingSection from "@/components/programmes/mathematics/PricingSection";

export default function MathematicsProgramme() {
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
