"use client";

import { useReveal } from "@/lib/useReveal";
import Link from "next/link";
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

        <div className="space-y-4">
          {projects.map((project, index) => {
            const externalLink =
              project.githubUrl || project.liveUrl || project.courseUrl;
            const href = project.slug
              ? `/projects/${project.slug}`
              : externalLink ?? "#";
            const tags = project.stack || [];

            const cardClass =
              "group block bg-surface border border-rule hover:border-signal transition-all duration-200 hover:translate-x-1";

            const cardContent = (
              <div className="grid grid-cols-[52px_1fr_auto] items-center gap-4 p-5">
                {/* Index */}
                <span className="font-mono text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-extrabold text-ink text-base md:text-lg group-hover:text-signal transition-colors">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-mint bg-mint/10 border border-mint/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse-dot" />
                        {project.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-muted line-clamp-2 mt-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tags.map((tag) => (
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
                  </div>
                </div>

                {/* Arrow */}
                <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono">
                  →
                </span>
              </div>
            );

            return project.slug ? (
              <Link key={project.title} href={href} className={cardClass}>
                {cardContent}
              </Link>
            ) : (
              <a
                key={project.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
