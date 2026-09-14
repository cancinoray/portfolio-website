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

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Raymond Cancino" };
  }

  return {
    title: `${post.title} | Raymond Cancino`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Raymond Cancino`,
      description: post.summary,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper py-16 px-4">
      <article className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors mb-10"
        >
          ← Back to writing
        </Link>

        <header className="pb-8 mb-10 border-b-2 border-ink">
          {post.coverImage && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 bg-chalk">
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 border bg-signal/[0.07] text-signal border-signal/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold tracking-tight text-3xl md:text-4xl mb-4 text-ink">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono uppercase tracking-widest text-muted">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <MarkdownContent content={post.content} variant="editorial" />
      </article>
    </main>
  );
}
