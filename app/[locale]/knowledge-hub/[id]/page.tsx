"use client";

import { useEffect, useState, useCallback } from "react";
import { useScroll, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { PostBodySection } from "@/components/knowledge-hub/PostBodySection";
import { PostHeroSection } from "@/components/knowledge-hub/PostHeroSection";
import { ReadingProgressBar } from "@/components/knowledge-hub/ReadingProgressBar";
import { RelatedPostsSection } from "@/components/knowledge-hub/RelatedPostsSection";
import {
  getPostInfo,
  getRelatedPosts,
} from "@/components/knowledge-hub/postData";
import { getAdminPostBySlug } from "@/lib/admin/clientPostAdapter";
import type { PostDetails } from "@/components/knowledge-hub/types";

// Fallback post when not found
const fallbackPost: PostDetails = {
  id: "1",
  title: "Article Not Found",
  date: "",
  readTime: "",
  categoryLabel: "Error",
  excerpt: "",
  image: "",
  author: "Admin",
  authorInitials: "AD",
  content: "<p>The requested article could not be found.</p>",
  headings: [],
};

export default function PostDetailsPage() {
  const t = useTranslations("KnowledgeHub");
  const tUnsafe = useCallback((key: string) => t(key as never), [t]);
  const params = useParams();
  const id = params?.id as string;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Try to get mock post first
  let post = getPostInfo(id, tUnsafe);
  const [adminPost, setAdminPost] = useState<PostDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);

  // If mock post not found or if id looks like a slug, try to fetch admin post
  useEffect(() => {
    // Only run if we haven't already attempted to load this id
    if (hasAttemptedLoad) return;

    async function loadAdminPost() {
      if (post.content === "<p>The requested article could not be found.</p>") {
        setLoading(true);
        try {
          const adminPostData = await getAdminPostBySlug(id);
          if (adminPostData) {
            const authorInitials = adminPostData.author
              .split(" ")
              .map((name) => name[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();

            const convertedPost: PostDetails = {
              id: adminPostData.id,
              title: adminPostData.title,
              date: adminPostData.publishedAt || adminPostData.createdAt || "",
              readTime: adminPostData.readTime || "5 min read",
              categoryLabel:
                tUnsafe(`categories.${adminPostData.category}`) || "General",
              excerpt: adminPostData.excerpt,
              image: adminPostData.coverImage,
              author: adminPostData.author,
              authorInitials,
              content: adminPostData.content,
              headings: adminPostData.headings || [],
            };
            setAdminPost(convertedPost);
          }
        } finally {
          setLoading(false);
          setHasAttemptedLoad(true);
        }
      } else {
        setHasAttemptedLoad(true);
      }
    }

    loadAdminPost();
  }, [id, post.content, hasAttemptedLoad, tUnsafe]);

  // Use admin post if found, otherwise use mock post
  const displayPost = adminPost || post;
  const relatedPosts = getRelatedPosts(id, tUnsafe);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 items-center justify-center">
        <p className="text-midnight/60 dark:text-cream/60">
          Loading article...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 relative">
      <ReadingProgressBar scaleX={scaleX} />
      <PostHeroSection post={displayPost} />
      <PostBodySection post={displayPost} />
      <RelatedPostsSection relatedPosts={relatedPosts} />
    </div>
  );
}
