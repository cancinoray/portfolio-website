"use client";

import { useReveal } from "@/lib/useReveal";
import { projects } from "@/data/projects";

const PRIMARY_STACK = [
  "Python",
  "Docker",
  "Apache Airflow",
  "dbt (Data Build Tool)",
  "Google BigQuery",
  "PostgreSQL",
  "PySpark",
  "Metabase",
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-20 bg-paper relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
          03 · Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ink tracking-tight mb-10">
          Selected Work
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => {
            const link =
              project.githubUrl || project.liveUrl || project.courseUrl;
            const tags = project.stack || [];

            return (
              <a
                key={project.title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface border border-rule rounded-lg hover:border-signal transition-all duration-200 hover:translate-x-1"
              >
                <div className="grid grid-cols-[52px_1fr_auto] items-center gap-4 p-5">
                  {/* Index */}
                  <span className="font-mono text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="font-display font-extrabold text-ink text-base md:text-lg group-hover:text-signal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-muted line-clamp-2 mt-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
