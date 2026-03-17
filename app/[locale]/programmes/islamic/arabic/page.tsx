"use client";

import { HeroSection } from "@/components/programmes/arabic/HeroSection";
import { OverviewResourcesSection } from "@/components/programmes/arabic/OverviewResourcesSection";
import { GlanceSection } from "@/components/programmes/arabic/GlanceSection";
import { DetailedCourseSection } from "@/components/programmes/arabic/DetailedCourseSection";
import { PricingSection } from "@/components/programmes/arabic/PricingSection";

export default function ArabicProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      <HeroSection />
      <OverviewResourcesSection />
      <GlanceSection />
      <DetailedCourseSection />
      <PricingSection />
    </div>
  );
}
