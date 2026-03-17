"use client";

import HeroSection from "@/components/programmes/hadith/HeroSection";
import OverviewSection from "@/components/programmes/hadith/OverviewSection";
import GlanceSection from "@/components/programmes/hadith/GlanceSection";
import DetailedCourseSection from "@/components/programmes/hadith/DetailedCourseSection";
import PricingSection from "@/components/programmes/hadith/PricingSection";

export default function HadithProgramme() {
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
