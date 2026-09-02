"use client";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { OriginSection } from "@/components/about/OriginSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const tNav = useTranslations("Navigation");
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-cream text-midnight pt-24">
      <AboutHeroSection />
      <MissionVisionSection />
      <PhilosophySection />
      <CoreValuesSection />
      <OriginSection />
      <LeadershipSection />
      <section className="py-16 bg-white dark:bg-midnight border-t border-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-cinzel text-2xl md:text-3xl text-midnight dark:text-cream tracking-wider mb-4">
            Ready to learn more?
          </h3>
          <p className="font-sans text-midnight/70 dark:text-cream/70 mb-8">
            Speak directly with our team about your child&apos;s journey.
          </p>
          <a
            href="https://calendly.com/markazulbayaan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-midnight px-8 py-3 rounded-sm text-sm font-medium tracking-wide hover:bg-amber hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            {tNav("bookCall")}
          </a>
        </div>
      </section>
    </div>
  );
}
