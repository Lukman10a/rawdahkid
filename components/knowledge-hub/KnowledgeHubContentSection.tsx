"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  getFilteredHubPosts,
  getHubCategories,
  getHubPosts,
} from "./listingData";
import type { HubCategoryId } from "./types";

export function KnowledgeHubContentSection() {
  const t = useTranslations("KnowledgeHub");
  const tUnsafe = (key: string) => t(key as never);
  const [activeCategory, setActiveCategory] = useState<HubCategoryId>("all");

  const categories = getHubCategories(tUnsafe);
  const posts = getHubPosts(tUnsafe);
  const filteredPosts = getFilteredHubPosts(posts, activeCategory);
  const featuredPost = posts[0];

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-navy grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16 overflow-x-auto hide-scrollbar pb-4">
          <div className="flex items-center gap-2 md:gap-8 border-b border-midnight/10 dark:border-white/10 px-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-4 px-2 font-cinzel text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                  activeCategory === cat.id
                    ? "text-gold"
                    : "text-midnight/50 dark:text-cream/50 hover:text-midnight dark:hover:text-cream"
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="categoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {activeCategory === "all" && featuredPost && (
            <motion.div
              layout
              key="featured-post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <Link href={`/knowledge-hub/${featuredPost.id}`}>
                <div className="group relative w-full h-125 md:h-150 rounded-sm overflow-hidden shadow-2xl cursor-pointer">
                  <div className="absolute inset-0 bg-midnight">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                      fill
                      sizes="100vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-midnight/95 via-midnight/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>

                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 text-white z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-4xl"
                    >
                      <div className="flex items-center gap-3 mb-4 text-xs font-cinzel tracking-[0.2em] text-gold uppercase">
                        <span className="bg-gold text-midnight px-3 py-1 font-bold">
                          Featured
                        </span>
                        <span>{featuredPost.categoryLabel}</span>
                      </div>

                      <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white drop-shadow-lg group-hover:text-amber-100 transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="font-sans text-lg md:text-xl text-white/80 mb-8 max-w-2xl line-clamp-2 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center gap-6 text-sm font-medium">
                        <div className="flex items-center gap-2 text-white/70">
                          <Clock size={16} className="text-gold" />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Calendar size={16} className="text-gold" />
                          {featuredPost.date}
                        </div>

                        <div className="ml-auto md:ml-0 flex items-center gap-2 text-gold font-bold tracking-wider uppercase group/btn">
                          {t("viewArticle")}
                          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2 rtl:get-reversed-direction" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <motion.div
            layout
            key="posts-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {filteredPosts
              .slice(activeCategory === "all" ? 1 : 0)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/knowledge-hub/${post.id}`}
                    className="group block h-full"
                  >
                    <div className="relative h-64 overflow-hidden rounded-sm mb-6 bg-gray-100 dark:bg-gray-800">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gold z-30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                      <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-white/90 dark:bg-midnight/90 backdrop-blur-md px-3 py-1 text-[10px] font-cinzel font-bold tracking-[0.2em] uppercase text-midnight dark:text-gold border border-gold/20">
                          {post.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 text-xs text-midnight/40 dark:text-cream/40 mb-3 font-sans uppercase tracking-wider">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gold"></span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-cormorant text-2xl font-bold text-midnight dark:text-cream mb-3 leading-snug group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>

                      <p className="font-sans text-sm text-midnight/60 dark:text-cream/60 leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-midnight/5 dark:border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-serif italic text-xs">
                            RA
                          </div>
                          <span className="text-xs font-medium text-midnight/80 dark:text-cream/80">
                            Rawdatul Atfaal
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rtl:rotate-180" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-midnight/5 dark:bg-white/5 mb-6">
              <BookOpen
                className="text-midnight/20 dark:text-cream/20"
                size={32}
              />
            </div>
            <p className="font-sans text-xl text-midnight/60 dark:text-cream/60">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
