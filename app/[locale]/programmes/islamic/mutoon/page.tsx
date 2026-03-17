"use client";

import { HeroSection } from "@/components/programmes/mutoon/HeroSection";
import { OverviewScheduleSection } from "@/components/programmes/mutoon/OverviewScheduleSection";
import { GlanceSection } from "@/components/programmes/mutoon/GlanceSection";
import { DetailedCourseSection } from "@/components/programmes/mutoon/DetailedCourseSection";
import { PricingSection } from "@/components/programmes/mutoon/PricingSection";

export default function MutoonProgramme() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream pt-24">
      <HeroSection />
      <OverviewScheduleSection />
      <GlanceSection />
      <DetailedCourseSection />
      <PricingSection />
    </div>
  );
}
