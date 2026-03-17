"use client";

import { KnowledgeHubContentSection } from "@/components/knowledge-hub/KnowledgeHubContentSection";
import { KnowledgeHubHeroSection } from "@/components/knowledge-hub/KnowledgeHubHeroSection";

export default function KnowledgeHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-navy text-midnight dark:text-cream pt-24">
      <KnowledgeHubHeroSection />
      <KnowledgeHubContentSection />
    </div>
  );
}
