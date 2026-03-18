import { z } from 'zod';

export const postSchema = z.object({
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  title: z.string().min(1, 'Title is required').min(5, 'Title must be at least 5 characters'),
  excerpt: z.string().min(1, 'Excerpt is required').min(10, 'Excerpt must be at least 10 characters').max(160, 'Excerpt must be under 160 characters'),
  category: z.enum(['islamic', 'tech', 'parenting', 'academics']),
  author: z.string().min(1, 'Author name is required'),
  coverImage: z.string().url('Invalid image URL'),
  content: z.string().min(1, 'Content is required').min(50, 'Content must be at least 50 characters'),
  status: z.enum(['draft', 'scheduled', 'published']),
  readTime: z.string().regex(/^\d+\s+min\s+read$/, 'Format: "5 min read"'),
  publishedAt: z.string().optional(),
  seoTitle: z.string().max(60, 'SEO title must be under 60 characters').optional(),
  seoDescription: z.string().max(160, 'SEO description must be under 160 characters').optional(),
  ogImage: z.string().url('Invalid OG image URL').optional(),
});

export type PostFormData = z.infer<typeof postSchema>;
