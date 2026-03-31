"use client";

import { useReveal } from "@/lib/useReveal";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

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
    <section id="projects" className="pt-0 pb-24 relative z-10 border-t border-ash/30">

      <div ref={ref} className="max-w-6xl mx-auto px-6 reveal">
        <p className="section-num mb-3">03 — Projects</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-snow tracking-tighter mb-12">
          Selected Work
        </h2>

        <div className="space-y-3">
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
                className="group block card-dark rounded-xl hover:border-neon/30 overflow-hidden"
              >
                <div className="grid grid-cols-[48px_1fr_auto] items-center gap-4 p-5 md:p-6">
                  {/* Index */}
                  <span className="font-mono text-sm text-fog/40 group-hover:text-neon/60 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-snow text-base md:text-lg group-hover:text-neon transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-serif text-[13px] text-fog line-clamp-2 mt-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            PRIMARY_STACK.includes(tag)
                              ? "bg-neon/[0.06] text-neon/80 border-neon/15"
                              : "bg-smoke/40 text-fog/70 border-ash/40"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="w-5 h-5 text-fog/30 group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
