"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function PostDetailsPage() {
  const t = useTranslations("KnowledgeHub");
  const params = useParams();
  const id = params?.id as string;

  // In a real app, this would be fetched from an API or CMS based on the ID.
  // Using the same mock data logic to retain the correct article:
  const getPostInfo = (postId: string) => {
    // Map ID to the post number
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

    // Handle keys safely and provide fallbacks
    return {
      title: t(`${postKey}.title`) || "Knowledge Hub Article",
      date: t(`${postKey}.date`) || "Recent",
      readTime: t(`${postKey}.readTime`) || "5 min read",
      categoryLabel: t(`categories.${category}`) || "General",
      excerpt: t(`${postKey}.excerpt`) || "",
      image,
      author: "Rawdatul Atfaal Editorial",
      content: `
        <p class="mb-6 text-lg">${t(`${postKey}.excerpt`)}</p>
        <h3 class="font-cinzel text-2xl mb-4 mt-8">The Importance of Continuous Learning</h3>
        <p class="mb-4">In our rapidly evolving world, the pursuit of knowledge has never been more critical. As we navigate through various stages of life—from early childhood education to adult professional development—the paradigms of traditional learning are shifting towards more dynamic, continuous models. This shift is not merely a modern trend but a profound reminder of the timeless Islamic principles that elevate the status of scholars and seekers of knowledge.</p>
        <p class="mb-4">At Rawdatul Atfaal, we understand that learning extends far beyond the confines of a physical classroom. Our virtual environment allows students globally to connect, share ideas, and grow together in a community built on faith, excellence, and mutual respect. The curriculum is designed to stimulate critical thinking while nurturing personal development.</p>
        <blockquote class="border-s-4 border-gold ps-6 py-2 my-8 font-sans italic text-xl text-midnight/80 dark:text-cream/80 bg-gold/5 dark:bg-gold/10 rounded-e-lg">
          "Knowledge is the life of the mind."
        </blockquote>
        <h3 class="font-cinzel text-2xl mb-4 mt-8">Integrating Traditional Values with Modern Skills</h3>
        <p class="mb-4">We live in an age where technology intersects every facet of our daily lives. From programming and advanced mathematics to deeply rooted studies in Fiqh, Hadith, and Qur'anic memorization—finding the balance is key. Our holistic approach ensures that students do not have to choose between their academic goals and their spiritual development.</p>
        <p class="mb-4">As educators and parents, our role is to foster an environment where resilience and adaptability thrive. By embracing innovative online learning methodologies, we equip the next generation with the tools they need to succeed in both this world and the Hereafter.</p>
      `,
    };
  };

  const post = getPostInfo(id);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-midnight">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-cream pt-10">
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center text-sm font-medium hover:text-gold transition-colors mb-8 text-cream/70 group"
          >
            <ChevronLeft
              size={16}
              className="mr-1 rtl:rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            Back to Knowledge Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans mb-6 uppercase tracking-wider text-cream/80">
              <span className="bg-gold text-midnight px-3 py-1 rounded-sm font-bold">
                {post.categoryLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-gold" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-gold" /> {post.readTime}
              </span>
            </div>

            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl tracking-wide mb-8 leading-tight text-white drop-shadow-md">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-white/20 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <User size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {post.author}
                  </div>
                  <div className="text-xs text-cream/60">Rawdatul Atfaal</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-colors">
                  <Facebook size={14} />
                </button>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-colors">
                  <Twitter size={14} />
                </button>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-colors">
                  <Linkedin size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 lg:py-24 flex-grow bg-white dark:bg-midnight">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert prose-headings:font-cinzel prose-p:font-sans prose-p:leading-relaxed prose-p:text-midnight/80 dark:prose-p:text-cream/80 prose-a:text-gold hover:prose-a:text-amber max-w-none text-midnight dark:text-cream"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags & Share */}
          <div className="mt-20 mb-10 pt-8 border-t border-midnight/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Tag size={18} className="text-midnight/40 dark:text-cream/40" />
              <div className="flex gap-2">
                <span className="px-4 py-1.5 bg-ivory dark:bg-[#12221b] border border-midnight/5 dark:border-white/5 rounded-full text-xs font-semibold tracking-wider uppercase text-midnight/70 dark:text-cream/70 hover:bg-gold/10 hover:text-gold transition-colors cursor-pointer">
                  {post.categoryLabel}
                </span>
                <span className="px-4 py-1.5 bg-ivory dark:bg-[#12221b] border border-midnight/5 dark:border-white/5 rounded-full text-xs font-semibold tracking-wider uppercase text-midnight/70 dark:text-cream/70 hover:bg-gold/10 hover:text-gold transition-colors cursor-pointer">
                  Education
                </span>
              </div>
            </div>

            <button className="flex items-center gap-3 text-sm font-bold tracking-wider uppercase text-midnight/60 dark:text-cream/60 hover:text-gold transition-colors group">
              <Share2
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              Share Article
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
