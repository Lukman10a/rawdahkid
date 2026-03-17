"use client";

import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { HeaderSection } from "@/components/contact/HeaderSection";
import { InfoCardsSection } from "@/components/contact/InfoCardsSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24">
      <HeaderSection />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <InfoCardsSection />
            <ContactFormSection />
          </div>
        </div>
      </section>
    </div>
  );
}
