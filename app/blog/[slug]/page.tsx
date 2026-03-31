import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import MarkdownContent from "@/components/MarkdownContent";
import { ArrowLeft } from "lucide-react";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Raymond Cancino",
    };
  }

  return {
    title: `${post.title} | Raymond Cancino`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-obsidian py-24 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-fog uppercase tracking-widest hover:text-neon transition-colors duration-300 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to blog
        </Link>

        <header className="mb-12">
          {post.coverImage && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-smoke">
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-neon/[0.06] text-neon/80 border border-neon/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-snow tracking-tighter leading-tight mb-4">
            {post.title}
          </h1>

          <div className="text-[11px] font-mono text-fog">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="mx-2 text-ash">·</span>
            {post.readingTime}
          </div>
        </header>

        <div className="font-serif text-lg text-cloud/80 leading-[1.8]">
          <MarkdownContent content={post.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-ash/30">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-mono text-fog uppercase tracking-widest hover:text-neon transition-colors duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All posts
          </Link>
        </div>
      </article>
    </main>
  );
}
