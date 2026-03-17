import { getBlogPosts } from "@/lib/blogPosts";
import type { PostDetails, RelatedPost, Translator } from "./types";

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

export function getPostInfo(postId: string, t: Translator): PostDetails {
  const postsData = getBlogPosts(t);
  const postData = postsData[postId];

  if (!postData) {
    return fallbackPost;
  }

  const authorInitials = postData.author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return {
    id: postId,
    title: postData.title || (postData.key ? t(`${postData.key}.title`) : ""),
    date: postData.date || (postData.key ? t(`${postData.key}.date`) : ""),
    readTime:
      postData.readTime || (postData.key ? t(`${postData.key}.readTime`) : ""),
    categoryLabel: t(`categories.${postData.category}`) || "General",
    excerpt: postData.excerpt || (postData.key ? t(`${postData.key}.excerpt`) : ""),
    image: postData.image,
    author: postData.author,
    authorInitials,
    content: postData.content || "",
    headings: postData.headings || [],
  };
}

export function getRelatedPosts(id: string, t: Translator): RelatedPost[] {
  return [
    {
      id: "5",
      title: "The Wonder of Electricity & Magnetism",
      category: "Tech & Sciences",
      image:
        "https://images.unsplash.com/photo-1620846506306-69680370d03b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "6",
      title: "Understanding Taharah: Cleanliness is Half of Faith",
      category: "Islamic Studies",
      image:
        "https://images.unsplash.com/photo-1574343869269-d75d5069b027?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: t("post2.title"),
      category: "Tech & Sciences",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: t("post3.title"),
      category: "Parenting",
      image:
        "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]
    .filter((post) => post.id !== id)
    .slice(0, 2);
}
