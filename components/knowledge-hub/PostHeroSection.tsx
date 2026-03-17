"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Clock } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { PostDetails } from "./types";

type PostHeroSectionProps = {
  post: PostDetails;
};

export function PostHeroSection({ post }: PostHeroSectionProps) {
  return (
    <section className="relative h-[70vh] min-h-125 flex items-end pb-20 justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-midnight">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10 text-cream">
        <Link
          href="/knowledge-hub"
          className="absolute top-0 left-4 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors flex items-center gap-2"
        >
          <ChevronLeft size={14} className="rtl:rotate-180" /> Back to Hub
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 border border-gold/40 rounded-sm font-cinzel text-xs font-bold text-gold uppercase tracking-[0.2em] bg-black/20 backdrop-blur-sm">
              {post.categoryLabel}
            </span>
            <div className="flex items-center gap-2 text-xs font-sans font-medium text-white/80 uppercase tracking-wider">
              <Clock size={14} className="text-gold" /> {post.readTime}
            </div>
          </div>

          <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl tracking-wide mb-8 leading-tight text-white drop-shadow-lg">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold font-serif italic text-lg border border-gold/20">
              {post.authorInitials}
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                {post.author}
              </div>
              <div className="text-xs text-white/60 uppercase tracking-wider">
                {post.date}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
