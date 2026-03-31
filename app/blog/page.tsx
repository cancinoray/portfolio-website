import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSortedBlogPosts } from "@/lib/blog";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Raymond Cancino",
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
    <main className="min-h-screen bg-obsidian py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-mono text-fog uppercase tracking-widest hover:text-neon transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
          <p className="section-num mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-snow tracking-tighter mb-4">
            Writing
          </h1>
          <p className="font-serif text-lg text-fog">
            Notes on projects, learning, and growth as an engineer.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-dark rounded-xl overflow-hidden group"
            >
              {post.coverImage && (
                <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-video bg-smoke overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                </Link>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-neon/[0.06] text-neon/80 border border-neon/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl md:text-2xl font-display font-bold text-snow mb-2 group-hover:text-neon transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <div className="text-[11px] font-mono text-fog mb-3">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span className="mx-2 text-ash">·</span>
                  {post.readingTime}
                </div>

                <p className="font-serif text-base text-cloud/60 leading-relaxed mb-4">
                  {post.summary}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neon/70 hover:text-neon transition-colors duration-300"
                >
                  Read post
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
