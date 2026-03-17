"use client";

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

export default function PostDetailsPage() {
  const t = useTranslations("KnowledgeHub");
  const tUnsafe = (key: string) => t(key as never);
  const params = useParams();
  const id = params?.id as string;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const post = getPostInfo(id, tUnsafe);
  const relatedPosts = getRelatedPosts(id, tUnsafe);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-midnight text-midnight dark:text-cream pt-24 relative">
      <ReadingProgressBar scaleX={scaleX} />
      <PostHeroSection post={post} />
      <PostBodySection post={post} />
      <RelatedPostsSection relatedPosts={relatedPosts} />
    </div>
  );
}
