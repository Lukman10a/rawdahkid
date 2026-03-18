import { PostData, CreatePostInput, UpdatePostInput } from './types';

// Mock in-memory storage - replace with API calls later
const mockPostsStore = {
  data: [
    {
      id: '1',
      slug: 'nurturing-love-quran',
      title: 'Nurturing a Love for the Quran at Home',
      excerpt: 'Practical and gentle ways to help your child connect with the words of Allah beyond the classroom.',
      category: 'islamic' as const,
      author: 'Sheikh Abdullah',
      coverImage: 'https://picsum.photos/1200/600?random=0',
      content: '<p>Sample content</p>',
      status: 'published' as const,
      readTime: '5 min read',
      publishedAt: '2026-03-10',
      createdAt: '2026-03-10',
      updatedAt: '2026-03-10',
      seoTitle: 'Nurturing Quran Love at Home',
      seoDescription: 'Learn practical ways to help children connect with the Quran',
    } as PostData,
  ],
};

export const postAdapter = {
  // Get all posts
  async getAll(): Promise<PostData[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mockPostsStore.data]), 100);
    });
  },

  // Get single post by ID
  async getById(id: string): Promise<PostData | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = mockPostsStore.data.find((p) => p.id === id);
        resolve(post ? { ...post } : null);
      }, 100);
    });
  },

  // Get single post by slug
  async getBySlug(slug: string): Promise<PostData | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = mockPostsStore.data.find((p) => p.slug === slug);
        resolve(post ? { ...post } : null);
      }, 100);
    });
  },

  // Create new post
  async create(data: CreatePostInput): Promise<PostData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost: PostData = {
          id: Date.now().toString(),
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        mockPostsStore.data.push(newPost);
        resolve({ ...newPost });
      }, 100);
    });
  },

  // Update existing post
  async update(id: string, data: UpdatePostInput): Promise<PostData | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockPostsStore.data.findIndex((p) => p.id === id);
        if (index === -1) {
          resolve(null);
        } else {
          mockPostsStore.data[index] = {
            ...mockPostsStore.data[index],
            ...data,
            updatedAt: new Date().toISOString(),
          };
          resolve({ ...mockPostsStore.data[index] });
        }
      }, 100);
    });
  },

  // Delete post
  async delete(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockPostsStore.data.findIndex((p) => p.id === id);
        if (index === -1) {
          resolve(false);
        } else {
          mockPostsStore.data.splice(index, 1);
          resolve(true);
        }
      }, 100);
    });
  },

  // Check if slug exists (for validation)
  async slugExists(slug: string, excludeId?: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const exists = mockPostsStore.data.some((p) => p.slug === slug && p.id !== excludeId);
        resolve(exists);
      }, 100);
    });
  },

  // Get posts by status
  async getByStatus(status: 'draft' | 'published' | 'scheduled'): Promise<PostData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPostsStore.data.filter((p) => p.status === status).map((p) => ({ ...p })));
      }, 100);
    });
  },
};
