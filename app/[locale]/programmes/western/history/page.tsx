import HeroSection from "@/components/programmes/history/HeroSection";
import OverviewSection from "@/components/programmes/history/OverviewSection";
import GlanceSection from "@/components/programmes/history/GlanceSection";
import DetailedCourseSection from "@/components/programmes/history/DetailedCourseSection";
import PricingSection from "@/components/programmes/history/PricingSection";

export const metadata = {
  title: "History & Social Studies Course | RAWDAH Academy",
  description:
    "Explore world history and social studies from ancient civilizations to modern era. Build critical thinking and analytical skills.",
};

export default function HistoryCoursePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <GlanceSection />
      <DetailedCourseSection />
      <PricingSection />
    </>
  );
}
