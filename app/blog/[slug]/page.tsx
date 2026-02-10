import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import MarkdownContent from "@/components/MarkdownContent";

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
      title: "Post Not Found | Kuya Ray",
    };
  }

  return {
    title: `${post.title} | Kuya Ray`,
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
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <article className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline mb-6"
        >
          ← Back to blog
        </Link>

        <header className="mb-10">
          {post.coverImage && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          )}
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

          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> ·{" "}
            {post.readingTime}
          </div>
        </header>

        <div className="text-lg text-gray-700 dark:text-gray-300">
          <MarkdownContent content={post.content} />
        </div>
      </article>
    </main>
  );
}
