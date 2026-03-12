"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function KnowledgeHubPage() {
  const t = useTranslations("KnowledgeHub");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "islamic", label: t("categories.islamic") },
    { id: "tech", label: t("categories.tech") },
    { id: "parenting", label: t("categories.parenting") },
    { id: "academics", label: t("categories.academics") },
  ];

  const posts = [
    {
      id: 1,
      title: t("post1.title"),
      excerpt: t("post1.excerpt"),
      date: t("post1.date"),
      readTime: t("post1.readTime"),
      category: "islamic",
      categoryLabel: t("categories.islamic"),
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaab31fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: t("post2.title"),
      excerpt: t("post2.excerpt"),
      date: t("post2.date"),
      readTime: t("post2.readTime"),
      category: "tech",
      categoryLabel: t("categories.tech"),
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: t("post3.title"),
      excerpt: t("post3.excerpt"),
      date: t("post3.date"),
      readTime: t("post3.readTime"),
      category: "parenting",
      categoryLabel: t("categories.parenting"),
      image:
        "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: t("post4.title"),
      excerpt: t("post4.excerpt"),
      date: t("post4.date"),
      readTime: t("post4.readTime"),
      category: "academics",
      categoryLabel: t("categories.academics"),
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // Featured post is always the first one conceptually, but we can just use post1
  const featuredPost = posts[0];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* HEADER SECTION */}
      <section className="py-20 bg-ivory dark:bg-[#12221b] text-midnight dark:text-cream border-b border-midnight/10 dark:border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"></div>

        {/* Subtle decorative icons */}
        <div className="absolute top-10 left-10 text-gold/10 dark:text-gold/5">
          <BookOpen size={120} />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl tracking-widest mb-6 uppercase">
            {t("title")}
          </h1>
          <p className="font-sans text-xl text-midnight/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white dark:bg-midnight flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gold text-midnight shadow-md"
                    : "bg-ivory dark:bg-accent/10 text-midnight/70 dark:text-cream/70 hover:bg-gold/20 hover:text-midnight dark:hover:text-cream"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FEATURED POST (Only show if 'all' is selected) */}
          {activeCategory === "all" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-20 group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row bg-ivory/30 dark:bg-accent/5 rounded-3xl overflow-hidden border border-midnight/5 dark:border-white/5 hover:border-gold/30 dark:hover:border-gold/30 transition-colors">
                <div className="lg:w-1/2 relative overflow-hidden h-[300px] lg:h-auto">
                  <div className="absolute inset-0 bg-midnight/20 z-10"></div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-gold text-midnight px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {t("featured")}
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-sans text-midnight/60 dark:text-cream/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Tag size={14} className="text-gold" />{" "}
                      {featuredPost.categoryLabel}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-gold" />{" "}
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="font-cinzel text-3xl lg:text-4xl text-midnight dark:text-cream mb-4 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-lg text-midnight/70 dark:text-cream/70 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-gold font-medium group-hover:gap-4 transition-all">
                    {t("viewArticle")}{" "}
                    <ArrowRight size={18} className="ml-2 rtl:rotate-180" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* POSTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col bg-white dark:bg-midnight rounded-2xl overflow-hidden border border-midnight/10 dark:border-white/10 hover:shadow-xl hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-ivory/90 dark:bg-midnight/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-midnight dark:text-cream">
                    {post.categoryLabel}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-xs font-sans text-midnight/50 dark:text-cream/50 mb-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-midnight dark:text-cream mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-midnight/70 dark:text-cream/70 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all">
                    {t("viewArticle")}{" "}
                    <ArrowRight size={16} className="ml-2 rtl:rotate-180" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-sans text-xl text-midnight/60 dark:text-cream/60">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
