import type { Metadata } from "next";
import Link from "next/link";
import { getSortedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing | Raymond Cancino",
  description:
    "Notes on data engineering, building products, and the work behind the projects.",
};

function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  return (
    <main className="min-h-screen bg-paper py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors mb-10"
        >
          ← Back to home
        </Link>

        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Writing
          </h1>
          <span className="font-mono text-xs text-muted">
            {String(posts.length).padStart(2, "0")} posts
          </span>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-surface border border-rule hover:border-signal transition-all duration-200 hover:translate-x-1"
            >
              <div className="grid grid-cols-[52px_1fr_auto] items-center gap-4 p-5">
                <span className="font-mono text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h2 className="font-display font-extrabold text-ink text-base md:text-lg group-hover:text-signal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-muted line-clamp-2 mt-1">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <time
                      dateTime={post.publishedAt}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-muted" aria-hidden>
                      ·
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {post.readingTime}
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 border bg-chalk text-muted border-rule"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
