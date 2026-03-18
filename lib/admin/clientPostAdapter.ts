/**
 * Client-side adapter to fetch admin posts from localStorage
 * Used by Knowledge Hub to display published articles
 */

import { PostData } from './types';

const STORAGE_KEY = 'rawdah_admin_posts';

export async function getPublishedAdminPosts(): Promise<PostData[]> {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const posts = JSON.parse(raw) as PostData[];
    // Return only published posts
    return posts.filter((post) => post.status === 'published');
  } catch {
    return [];
  }
}

export async function getAdminPostBySlug(slug: string): Promise<PostData | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const posts = JSON.parse(raw) as PostData[];
    // Find by slug regardless of status (allows previewing drafts)
    const post = posts.find((p) => p.slug === slug);
    return post || null;
  } catch {
    return null;
  }
}
