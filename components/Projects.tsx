"use client";

import { useReveal } from "@/lib/useReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const PRIMARY_STACK = [
  "Python",
  "Docker",
  "Apache Airflow",
  "dbt (Data Build Tool)",
  "dbt",
  "Google BigQuery",
  "BigQuery",
  "PostgreSQL",
  "PySpark",
  "Metabase",
  "GCP",
  "Terraform",
  "scikit-learn",
  "TensorFlow",
  "Next.js",
  "TypeScript",
];

const CARD_CLASS =
  "group flex flex-col bg-surface border border-rule hover:border-signal transition-colors overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-20 bg-paper relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Selected Work
          </h2>
          <span className="font-mono text-xs text-muted">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const tags = project.stack || [];
            const externalUrl =
              project.liveUrl ?? project.githubUrl ?? project.courseUrl;
            const href = project.slug
              ? `/projects/${project.slug}`
              : externalUrl ?? "#";
            const callToAction = project.slug
              ? "Case study"
              : project.liveUrl
              ? "Visit site"
              : "View project";
            // Projects without cover art lead with their headline figure instead.
            const [plateHeadline, ...plateDetail] = (
              project.highlight ??
              project.kind ??
              ""
            ).split(" · ");

            const card = (
              <>
                <div className="relative w-full aspect-[16/10] bg-chalk border-b border-rule overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-center bg-chalk px-6">
                      <p className="font-display font-extrabold text-ink text-4xl leading-[0.95] tracking-tight">
                        {plateHeadline}
                      </p>
                      {plateDetail.length > 0 && (
                        <p className="mt-2.5 font-body text-[13px] text-muted">
                          {plateDetail.join(" · ")}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  {project.kind && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {project.kind}
                    </p>
                  )}
                  <h3 className="mt-1.5 font-display font-extrabold text-ink text-base md:text-lg leading-snug group-hover:text-signal transition-colors">
                    {project.title}
                  </h3>
                  {project.highlight && project.image && (
                    <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-[10px] font-mono text-mint bg-mint/10 border border-mint/20 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse-dot" />
                      {project.highlight}
                    </span>
                  )}
                  <p className="text-[13px] text-muted line-clamp-3 mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono px-2 py-0.5 border ${
                          PRIMARY_STACK.includes(tag)
                            ? "bg-signal/[0.07] text-signal border-signal/20"
                            : "bg-chalk text-muted border-rule"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 border border-rule text-muted/70">
                        +{tags.length - 4}
                      </span>
                    )}
                  </div>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-mono text-xs text-signal">
                    {callToAction}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </>
            );

            return project.slug ? (
              <Link key={project.title} href={href} className={CARD_CLASS}>
                {card}
              </Link>
            ) : (
              <a
                key={project.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={CARD_CLASS}
              >
                {card}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
