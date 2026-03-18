import React from "react";
import { Link } from "@/i18n/routing";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory dark:bg-midnight text-midnight dark:text-cream">
      <nav className="bg-midnight dark:bg-navy border-b border-gold/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gold">Rawdah Admin</h1>
          <div className="flex gap-3 items-center">
            <Link
              href="/"
              className="px-4 py-2 border border-gold/30 text-cream rounded font-semibold hover:bg-gold/10 transition-colors"
            >
              Back Home
            </Link>

            <Link
              href="/admin/posts/new"
              className="px-4 py-2 bg-gold text-midnight rounded font-semibold hover:bg-amber-400 transition-colors"
            >
              New Post
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
