"use client";

import HeroSection from "@/components/programmes/quran-memorisation/HeroSection";
import OverviewSection from "@/components/programmes/quran-memorisation/OverviewSection";
import GlanceSection from "@/components/programmes/quran-memorisation/GlanceSection";
import DetailedCourseSection from "@/components/programmes/quran-memorisation/DetailedCourseSection";
import PricingSection from "@/components/programmes/quran-memorisation/PricingSection";

export default function QuranMemorisation() {
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
