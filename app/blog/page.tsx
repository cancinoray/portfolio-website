import type { Metadata } from "next";
import Link from "next/link";
import { getSortedBlogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Kuya Ray",
  description: "Stories, build notes, and lessons from my software journey.",
};

function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-primary dark:text-primary-light hover:underline mb-4"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Notes on projects, learning, and growth as an engineer.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> ·{" "}
                {post.readingTime}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center font-semibold text-primary dark:text-primary-light hover:underline"
              >
                Read post →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
