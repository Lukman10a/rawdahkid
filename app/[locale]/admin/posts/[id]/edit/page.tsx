"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { PostForm } from "@/components/admin/PostForm";
import { postAdapter } from "@/lib/admin/postAdapter";
import { PostFormData } from "@/lib/admin/schema";
import { PostData } from "@/lib/admin/types";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params?.id as string;

  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadPost() {
      if (!postId) return;
      try {
        const data = await postAdapter.getById(postId);
        if (!data) {
          setError("Post not found");
        } else {
          setPost(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load post");
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [postId]);

  async function handleSubmit(data: PostFormData) {
    if (!postId) return;
    setError(null);
    setIsSubmitting(true);

    try {
      // Check if slug is being changed and new slug exists
      if (data.slug !== post?.slug) {
        const exists = await postAdapter.slugExists(data.slug, postId);
        if (exists) {
          setError(
            "This slug is already in use. Please choose a different slug.",
          );
          setIsSubmitting(false);
          return;
        }
      }

      // Generate headings from content
      const headings: Array<{ id: string; title: string }> = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.content, "text/html");
      const headingElements = doc.querySelectorAll("h1, h2, h3");

      headingElements.forEach((el, index) => {
        const id = `section-${index + 1}`;
        headings.push({
          id,
          title: el.textContent || "",
        });
      });

      await postAdapter.update(postId, {
        ...data,
        headings,
      });

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
      console.error("Error updating post:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-midnight/60 dark:text-cream/60">Loading post...</p>
      </div>
    );
  }

  if (error && !post) {
    return (
      <div className="p-4 rounded bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400">
        {error}
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-cinzel text-midnight dark:text-cream">
          Edit Post
        </h1>
        <p className="text-midnight/60 dark:text-cream/60 mt-1">
          Update the article content and settings
        </p>
      </div>

      {error && (
        <div className="p-4 rounded bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-[#12221b] rounded-lg p-6 border border-midnight/5 dark:border-white/5">
        <PostForm
          initialData={post}
          onSubmit={handleSubmit}
          isLoading={isSubmitting}
        />
      </div>
    </div>
  );
}
