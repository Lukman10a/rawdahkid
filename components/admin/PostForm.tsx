"use client";

import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema, PostFormData } from "@/lib/admin/schema";
import { PostData } from "@/lib/admin/types";
import { RichEditor } from "./RichEditor";
import { useState, useRef, ChangeEvent } from "react";
import { Upload } from "lucide-react";

interface PostFormProps {
  initialData?: PostData;
  onSubmit: (data: PostFormData) => Promise<void>;
  isLoading?: boolean;
}

export function PostForm({
  initialData,
  onSubmit,
  isLoading = false,
}: PostFormProps) {
  const [preview, setPreview] = useState(false);
  const coverImageFileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      slug: initialData?.slug || "",
      title: initialData?.title || "",
      excerpt: initialData?.excerpt || "",
      category: initialData?.category || "islamic",
      author: initialData?.author || "",
      coverImage: initialData?.coverImage || "",
      content: initialData?.content || "",
      status: initialData?.status || "draft",
      readTime: initialData?.readTime || "5 min read",
      publishedAt: initialData?.publishedAt || "",
      seoTitle: initialData?.seoTitle || "",
      seoDescription: initialData?.seoDescription || "",
      ogImage: initialData?.ogImage || "",
    },
  });

  const title = useWatch({ control, name: "title" }) || "";
  const excerpt = useWatch({ control, name: "excerpt" }) || "";
  const coverImage = useWatch({ control, name: "coverImage" }) || "";
  const content = useWatch({ control, name: "content" }) || "";
  const seoTitle = useWatch({ control, name: "seoTitle" }) || "";
  const seoDescription = useWatch({ control, name: "seoDescription" }) || "";

  const handleCoverImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      window.alert("Please choose an image file.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const src = reader.result;
      if (typeof src === "string") {
        // Update the hidden input directly
        const coverImageInput = document.querySelector(
          'input[name="coverImage"]',
        ) as HTMLInputElement;
        if (coverImageInput) {
          coverImageInput.value = src;
          // Trigger change event for react-hook-form to detect the change
          coverImageInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    };
    reader.readAsDataURL(file);

    // Allow selecting the same file again
    event.target.value = "";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Preview Toggle */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setPreview(!preview)}
          className="px-4 py-2 rounded bg-gold/20 text-gold font-semibold hover:bg-gold/30 transition-colors"
        >
          {preview ? "Exit Preview" : "Preview"}
        </button>
      </div>

      {preview ? (
        // Preview Mode
        <div className="bg-white dark:bg-midnight rounded-lg p-8 prose prose-lg dark:prose-invert max-w-none">
          <h1>{title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
          {coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt={title}
              className="max-h-96 w-full object-cover rounded"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ) : (
        <>
          {/* Basic Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Title *
              </label>
              <input
                {...register("title")}
                className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                placeholder="Article title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Slug *
              </label>
              <input
                {...register("slug")}
                className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                placeholder="article-slug"
              />
              {errors.slug && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.slug.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Author *
              </label>
              <input
                {...register("author")}
                className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                placeholder="Author name"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Category *
              </label>
              <select
                {...register("category")}
                className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
              >
                <option value="islamic">Islamic Studies</option>
                <option value="tech">Tech & Sciences</option>
                <option value="parenting">Parenting</option>
                <option value="academics">Academics</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Status *
              </label>
              <select
                {...register("status")}
                className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
              >
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Read Time *
              </label>
              <input
                {...register("readTime")}
                className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                placeholder="5 min read"
              />
              {errors.readTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.readTime.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                Cover Image URL *
              </label>
              <div className="flex gap-2">
                <input
                  {...register("coverImage")}
                  className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                  placeholder="https://example.com/image.jpg"
                />
                <button
                  type="button"
                  onClick={() => coverImageFileInputRef.current?.click()}
                  className="px-4 py-2 bg-gold/20 hover:bg-gold/30 text-midnight dark:text-cream rounded font-semibold transition-colors flex items-center gap-2 whitespace-nowrap"
                  title="Upload image file"
                >
                  <Upload size={18} />
                  Upload
                </button>
              </div>
              {errors.coverImage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.coverImage.message}
                </p>
              )}
              <input
                ref={coverImageFileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverImageUpload}
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
              Excerpt * ({excerpt.length}/160)
            </label>
            <textarea
              {...register("excerpt")}
              className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
              rows={3}
              placeholder="Brief summary of the article"
            />
            {errors.excerpt && (
              <p className="text-red-500 text-sm mt-1">
                {errors.excerpt.message}
              </p>
            )}
          </div>

          {/* Rich Content Editor */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
              Content *
            </label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => <RichEditor {...field} />}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {errors.content.message}
              </p>
            )}
          </div>

          {/* SEO Fields */}
          <div className="border-t border-midnight/10 dark:border-white/10 pt-6">
            <h3 className="text-lg font-semibold text-midnight dark:text-cream mb-4">
              SEO Settings
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                  SEO Title ({seoTitle.length}/60)
                </label>
                <input
                  {...register("seoTitle")}
                  className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                  placeholder="SEO optimized title"
                />
                {errors.seoTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.seoTitle.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                  OG Image URL
                </label>
                <input
                  {...register("ogImage")}
                  className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                  placeholder="https://example.com/og-image.jpg"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-cream">
                  SEO Description ({seoDescription.length}/160)
                </label>
                <textarea
                  {...register("seoDescription")}
                  className="w-full px-4 py-2 border border-midnight/10 dark:border-white/10 rounded bg-white dark:bg-[#12221b] text-midnight dark:text-cream focus:border-gold focus:outline-none"
                  rows={3}
                  placeholder="SEO optimized description"
                />
                {errors.seoDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.seoDescription.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 rounded border border-midnight/10 dark:border-white/10 text-midnight dark:text-cream hover:bg-midnight/5 dark:hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 rounded bg-gold text-midnight font-bold hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading
                ? "Saving..."
                : initialData
                  ? "Update Post"
                  : "Create Post"}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
