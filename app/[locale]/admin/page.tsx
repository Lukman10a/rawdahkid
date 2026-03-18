"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PostData } from "@/lib/admin/types";
import { postAdapter } from "@/lib/admin/postAdapter";
import { Trash2, Edit2, Eye } from "lucide-react";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "draft" | "published" | "scheduled"
  >("all");

  async function deletePost(id: string) {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await postAdapter.delete(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  useEffect(() => {
    let isMounted = true;

    const loadInitialPosts = async () => {
      try {
        const data = await postAdapter.getAll();
        if (isMounted) {
          setPosts(data);
        }
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadInitialPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPosts =
    filter === "all" ? posts : posts.filter((p) => p.status === filter);

  return (
    <div className="space-y-6 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-midnight dark:text-cream">
            Knowledge Hub Posts
          </h1>
          <p className="text-midnight/60 dark:text-cream/60 mt-1">
            Manage and create posts for your knowledge base
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="px-6 py-3 bg-gold text-midnight rounded font-bold hover:bg-amber-400 transition-colors"
        >
          + New Post
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-midnight/10 dark:border-white/10">
        {(["all", "draft", "published", "scheduled"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 border-b-2 capitalize font-semibold transition-colors ${
              filter === status
                ? "border-gold text-gold"
                : "border-transparent text-midnight/60 dark:text-cream/60 hover:text-midnight dark:hover:text-cream"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Posts Table */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-midnight/60 dark:text-cream/60">
            Loading posts...
          </p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-12 bg-ivory dark:bg-[#12221b] rounded-lg border border-midnight/5 dark:border-white/5">
          <p className="text-midnight/60 dark:text-cream/60">No posts found</p>
          <Link
            href="/admin/posts/new"
            className="text-gold hover:underline mt-2 inline-block"
          >
            Create your first post →
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto border border-midnight/10 dark:border-white/10 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-ivory dark:bg-[#12221b] border-b border-midnight/10 dark:border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Author
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-midnight/10 dark:border-white/10 hover:bg-ivory/50 dark:hover:bg-[#12221b]/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-midnight dark:text-cream">
                        {post.title}
                      </p>
                      <p className="text-sm text-midnight/60 dark:text-cream/60">
                        {post.slug}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm capitalize">
                    {post.category}
                  </td>
                  <td className="px-6 py-4 text-sm">{post.author}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.status === "published"
                          ? "bg-green/20 text-green"
                          : post.status === "scheduled"
                            ? "bg-blue-500/20 text-blue-500"
                            : "bg-gray-500/20 text-gray-500"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="p-2 hover:bg-gold/20 rounded transition-colors text-midnight dark:text-cream"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </Link>
                      <a
                        href={`/knowledge-hub/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gold/20 rounded transition-colors text-midnight dark:text-cream"
                        title="Preview"
                      >
                        <Eye size={16} />
                      </a>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-2 hover:bg-red-500/20 rounded transition-colors text-red-500"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
