export type PostStatus = 'draft' | 'scheduled' | 'published';
export type PostCategory = 'islamic' | 'tech' | 'parenting' | 'academics';

export interface PostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  author: string;
  coverImage: string;
  content: string;
  contentJson?: any;
  status: PostStatus;
  readTime: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  headings?: Array<{ id: string; title: string }>;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
}

export type CreatePostInput = Omit<PostData, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdatePostInput = Partial<CreatePostInput>;
