"use client";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { OriginSection } from "@/components/about/OriginSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-cream text-midnight pt-24">
      <AboutHeroSection />
      <MissionVisionSection />
      <PhilosophySection />
      <CoreValuesSection />
      <OriginSection />
      <LeadershipSection />
    </div>
  );
}
