import HeroSection from "@/components/programmes/ai/HeroSection";
import OverviewSection from "@/components/programmes/ai/OverviewSection";
import GlanceSection from "@/components/programmes/ai/GlanceSection";
import DetailedCourseSection from "@/components/programmes/ai/DetailedCourseSection";
import PricingSection from "@/components/programmes/ai/PricingSection";

export const metadata = {
  title: "Artificial Intelligence Course | RAWDAH Academy",
  description:
    "Comprehensive AI education from foundations to production systems. Learn machine learning, neural networks, NLP, and computer vision.",
};

export default function AICoursePage() {
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
