import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import {
  getProjectCaseStudyBySlug,
  getProjectCaseStudySlugs,
} from "@/lib/projects";
import MarkdownContent from "@/components/MarkdownContent";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Project Not Found | Raymond Cancino" };
  }

  return {
    title: `${study.title} | Raymond Cancino`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | Raymond Cancino`,
      description: study.summary,
      ...(study.ogImage ? { images: [study.ogImage] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = getProjectCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper py-16 px-4">
      <article className="container mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors mb-10"
        >
          ← Back to projects
        </Link>

        <header className="pb-8 mb-10 border-b-2 border-ink">
          {study.coverImage && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 bg-chalk">
              <Image
                src={study.coverImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 border bg-signal/[0.07] text-signal border-signal/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold tracking-tight text-3xl md:text-4xl mb-4 text-ink">
            {study.title}
          </h1>

          <p className="text-muted leading-relaxed mb-6">{study.summary}</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono uppercase tracking-widest text-muted mb-8">
            {study.role && <span>{study.role}</span>}
            {study.role && study.timeline && <span aria-hidden>·</span>}
            {study.timeline && <span>{study.timeline}</span>}
            {(study.role || study.timeline) && <span aria-hidden>·</span>}
            <span>{study.readingTime}</span>
          </div>

          {study.highlights && study.highlights.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule mb-8">
              {study.highlights.map((item) => (
                <div key={item} className="bg-surface px-4 py-4">
                  <span className="font-display font-bold text-sm text-ink leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4">
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-[11px] font-mono uppercase tracking-widest rounded-sm hover:bg-signal transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
            {study.githubUrl && (
              <a
                href={`${study.githubUrl}#readme`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink text-ink text-[11px] font-mono uppercase tracking-widest rounded-sm hover:border-signal hover:text-signal transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Full README
              </a>
            )}
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink text-ink text-[11px] font-mono uppercase tracking-widest rounded-sm hover:border-signal hover:text-signal transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </header>

        <MarkdownContent content={study.content} variant="editorial" />
      </article>
    </main>
  );
}
