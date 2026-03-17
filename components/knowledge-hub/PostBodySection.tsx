"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Share2, Twitter } from "lucide-react";
import type { PostDetails } from "./types";

type PostBodySectionProps = {
  post: PostDetails;
};

export function PostBodySection({ post }: PostBodySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
        <article>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none drop-cap article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-midnight/10 dark:border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-cinzel font-bold text-midnight/40 dark:text-cream/40 uppercase tracking-wider mr-2">
                  Tags:
                </span>
                {["Education", "Future", "Islamic Values"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-ivory dark:bg-[#12221b] text-xs font-medium text-midnight/70 dark:text-cream/70 rounded-full border border-midnight/5 dark:border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-midnight/10 dark:border-white/10 flex items-center justify-center text-midnight/60 dark:text-cream/60 hover:bg-gold hover:border-gold hover:text-midnight transition-all">
                  <Facebook size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-midnight/10 dark:border-white/10 flex items-center justify-center text-midnight/60 dark:text-cream/60 hover:bg-gold hover:border-gold hover:text-midnight transition-all">
                  <Twitter size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-midnight/10 dark:border-white/10 flex items-center justify-center text-midnight/60 dark:text-cream/60 hover:bg-gold hover:border-gold hover:text-midnight transition-all">
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
          </div>
        </article>

        <aside className="hidden lg:block lg:self-start">
          <div className="space-y-8 h-fit sticky top-32">
            <div className="bg-ivory dark:bg-[#12221b] p-8 rounded-sm border border-midnight/5 dark:border-white/5">
              <h4 className="font-cinzel text-lg font-bold text-midnight dark:text-cream mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-gold block"></span>
                On this page
              </h4>
              <ul className="space-y-4">
                {post.headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="flex items-start gap-3 group text-sm text-midnight/70 dark:text-cream/70 hover:text-gold transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 group-hover:bg-gold transition-colors"></span>
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linear-to-br from-gold/10 to-transparent p-8 rounded-sm border border-gold/20 text-center">
              <h4 className="font-cormorant italic text-xl text-midnight dark:text-cream mb-2">
                Enjoyed this read?
              </h4>
              <p className="text-xs font-sans text-midnight/60 dark:text-cream/60 mb-6 uppercase tracking-wider">
                Share it with your community
              </p>
              <button className="w-full py-3 bg-gold text-midnight font-bold font-cinzel text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                <Share2 size={16} /> Share Article
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
