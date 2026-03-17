import { getBlogPosts, type BlogPost } from "@/lib/blogPosts";
import type {
  HubCategory,
  HubCategoryId,
  HubPost,
  Translator,
} from "./types";

export function getHubCategories(t: Translator): HubCategory[] {
  return [
    { id: "all", label: t("categories.all") },
    { id: "islamic", label: t("categories.islamic") },
    { id: "tech", label: t("categories.tech") },
    { id: "parenting", label: t("categories.parenting") },
    { id: "academics", label: t("categories.academics") },
  ];
}

export function getHubPosts(t: Translator): HubPost[] {
  return Object.values(getBlogPosts(t)).map((post: BlogPost) => ({
    id: post.id,
    image: post.image,
    category: post.category,
    categoryLabel: t(`categories.${post.category}`),
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
  }));
}

export function getFilteredHubPosts(
  posts: HubPost[],
  activeCategory: HubCategoryId,
): HubPost[] {
  if (activeCategory === "all") {
    return posts;
  }

  return posts.filter((post) => post.category === activeCategory);
}
