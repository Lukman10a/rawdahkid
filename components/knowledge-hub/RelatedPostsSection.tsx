"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { RelatedPost } from "./types";

type RelatedPostsSectionProps = {
  relatedPosts: RelatedPost[];
};

export function RelatedPostsSection({
  relatedPosts,
}: RelatedPostsSectionProps) {
  return (
    <section className="py-20 bg-ivory dark:bg-[#12221b] border-t border-midnight/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-cinzel text-3xl text-midnight dark:text-cream">
            More from Knowledge Hub
          </h3>
          <Link
            href="/knowledge-hub"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wider hover:gap-3 transition-all"
          >
            View All <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((related, idx) => (
            <Link
              href={`/knowledge-hub/${related.id}`}
              key={idx}
              className="group block"
            >
              <div className="h-48 overflow-hidden rounded-sm mb-4 relative">
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors z-10"></div>
                {related.image && (
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <span className="absolute top-3 left-3 z-20 bg-white/90 dark:bg-midnight/90 backdrop-blur-md px-2 py-1 text-[9px] font-cinzel font-bold tracking-[0.2em] uppercase text-midnight dark:text-gold">
                  {related.category}
                </span>
              </div>
              <h4 className="font-cormorant text-xl font-bold text-midnight dark:text-cream leading-tight group-hover:text-gold transition-colors">
                {related.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
