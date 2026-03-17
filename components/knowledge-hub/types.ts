export type Translator = (key: string) => string;

export type PostHeading = {
  id: string;
  title: string;
};

export type PostDetails = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  categoryLabel: string;
  excerpt: string;
  image: string;
  author: string;
  authorInitials: string;
  content: string;
  headings: PostHeading[];
};

export type RelatedPost = {
  id: string;
  title: string;
  category: string;
  image: string;
};

export type HubCategoryId =
  | "all"
  | "islamic"
  | "tech"
  | "parenting"
  | "academics";

export type HubCategory = {
  id: HubCategoryId;
  label: string;
};

export type HubPost = {
  id: string;
  image: string;
  category: Exclude<HubCategoryId, "all">;
  categoryLabel: string;
  author: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};
