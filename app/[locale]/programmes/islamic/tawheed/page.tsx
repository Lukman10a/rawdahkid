"use client";

import { HeroSection } from "@/components/programmes/tawheed/HeroSection";
import { OverviewSection } from "@/components/programmes/tawheed/OverviewSection";
import { GlanceSection } from "@/components/programmes/tawheed/GlanceSection";
import { DetailedCourseSection } from "@/components/programmes/tawheed/DetailedCourseSection";
import { PricingSection } from "@/components/programmes/tawheed/PricingSection";

export default function TawheedProgramme() {
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
