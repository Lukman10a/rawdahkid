"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PostForm } from "@/components/admin/PostForm";
import { postAdapter } from "@/lib/admin/postAdapter";
import { PostFormData } from "@/lib/admin/schema";

export default function CreatePostPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: PostFormData) {
    setError(null);
    setIsLoading(true);

    try {
      // Check if slug already exists
      const exists = await postAdapter.slugExists(data.slug);
      if (exists) {
        setError(
          "This slug is already in use. Please choose a different slug.",
        );
        setIsLoading(false);
        return;
      }

      // Generate headings from content (h1, h2, h3)
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

      // Create post
      await postAdapter.create({
        ...data,
        headings,
      });

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
      console.error("Error creating post:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-cinzel text-midnight dark:text-cream">
          Create New Post
        </h1>
        <p className="text-midnight/60 dark:text-cream/60 mt-1">
          Write and publish a new article to your knowledge hub
        </p>
      </div>

      {error && (
        <div className="p-4 rounded bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-[#12221b] rounded-lg p-6 border border-midnight/5 dark:border-white/5">
        <PostForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
