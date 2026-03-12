"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Tag,
  Calendar,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PostDetailsPage() {
  const t = useTranslations("KnowledgeHub");
  const params = useParams();
  const id = params?.id as string;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Mock data fetching logic (consistent with listing page)
  const getPostInfo = (postId: string) => {
    // Basic mapping
    let postKey = "post1";
    let image =
      "https://images.unsplash.com/photo-1609599006353-e629aaab31fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
    let category = "islamic";

    if (postId === "2") {
      postKey = "post2";
      image =
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
      category = "tech";
    } else if (postId === "3") {
      postKey = "post3";
      image =
        "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
      category = "parenting";
    } else if (postId === "4") {
      postKey = "post4";
      image =
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
      category = "academics";
    }

    // Return extended post object
    return {
      id: postId,
      title: t(`${postKey}.title`) || "Knowledge Hub Article",
      date: t(`${postKey}.date`) || "Recent",
      readTime: t(`${postKey}.readTime`) || "5 min read",
      categoryLabel: t(`categories.${category}`) || "General",
      excerpt: t(`${postKey}.excerpt`) || "",
      image,
      author: "Rawdatul Atfaal Editorial",
      authorInitials: "RA",
      // Sample rich content with more structure for the new layout
      content: `
        <p class="mb-6 text-xl leading-relaxed font-serif text-midnight/90 dark:text-cream/90">${t(`${postKey}.excerpt`)}</p>
        
        <h2 id="section-1">The Importance of Continuous Learning</h2>
        <p>In our rapidly evolving world, the pursuit of knowledge has never been more critical. As we navigate through various stages of life—from early childhood education to adult professional development—the paradigms of traditional learning are shifting towards more dynamic, continuous models.</p>
        <p>This shift is not merely a modern trend but a profound reminder of the timeless Islamic principles that elevate the status of scholars and seekers of knowledge. It is a journey that begins in the cradle and extends to the grave.</p>
        
        <blockquote class="my-10">
          "Knowledge is the life of the mind, the light of the eyes, and the strength of the body."
        </blockquote>
        
        <h2 id="section-2">Integrating Tradition & Modernity</h2>
        <p>At Rawdatul Atfaal, we understand that learning extends far beyond the confines of a physical classroom. Our virtual environment allows students globally to connect, share ideas, and grow together in a community built on faith, excellence, and mutual respect. The curriculum is designed to stimulate critical thinking while nurturing personal development.</p>
        
        <h3 id="section-3">A Holistic Approach</h3>
        <p>We live in an age where technology intersects every facet of our daily lives. From programming and advanced mathematics to deeply rooted studies in Fiqh, Hadith, and Qur'anic memorization—finding the balance is key. Our holistic approach ensures that students do not have to choose between their academic goals and their spiritual development.</p>
        
        <p>As educators and parents, our role is to foster an environment where resilience and adaptability thrive. By embracing innovative online learning methodologies, we equip the next generation with the tools they need to succeed in both this world and the Hereafter.</p>
      `,
      headings: [
        { id: "section-1", title: "The Importance of Continuous Learning" },
        { id: "section-2", title: "Integrating Tradition & Modernity" },
        { id: "section-3", title: "A Holistic Approach" },
      ],
    };
  };

  const post = getPostInfo(id);

  // Suggested "Related Posts" - normally filtered from a larger list
  const relatedPosts = [
    {
      id: "1",
      title: t("post1.title"),
      category: "Islamic Studies",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaab31fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: t("post2.title"),
      category: "Tech & Sciences",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: t("post3.title"),
      category: "Parenting",
      image:
        "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]
    .filter((p) => p.id !== id)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 relative">
      {/* 1. READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gold origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* 2. CINEMATIC HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-midnight">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent"></div>
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

      {/* 3. CONTENT + SIDEBAR LAYOUT */}
      <section className="py-16 lg:py-24 bg-white dark:bg-midnight relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          {/* Main Article Content */}
          <article>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none drop-cap article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post-Article Footer */}
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

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block space-y-8 h-fit sticky top-32">
            {/* Table of Contents */}
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

            {/* Share Box (Mobile usually has this at bottom, Desktop on side) */}
            <div className="bg-gradient-to-br from-gold/10 to-transparent p-8 rounded-sm border border-gold/20 text-center">
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
          </aside>
        </div>
      </section>

      {/* 4. RELATED POSTS */}
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
            {relatedPosts.map((related, i) => (
              <Link
                href={`/knowledge-hub/${related.id}`}
                key={i}
                className="group block"
              >
                <div className="h-48 overflow-hidden rounded-sm mb-4 relative">
                  <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
    </div>
  );
}
