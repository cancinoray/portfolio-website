"use client";

import { useReveal } from "@/lib/useReveal";

type SkillCategory = {
  label: string;
  skills: { name: string; slug?: string; hot?: boolean }[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Data Engineering",
    skills: [
      { name: "Python", slug: "python", hot: true },
      { name: "SQL", hot: true },
      { name: "Apache Airflow", slug: "apacheairflow", hot: true },
      { name: "dbt", hot: true },
      { name: "OpenMetadata", hot: true },
      { name: "Spark", slug: "apachespark" },
      { name: "Kafka", slug: "apachekafka" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Pandas", slug: "pandas" },
    ],
  },
  {
    label: "Cloud & Infra",
    skills: [
      { name: "AWS", hot: true },
      { name: "GCP", slug: "googlecloud", hot: true },
      { name: "Grafana", slug: "grafana", hot: true },
      { name: "BigQuery", slug: "googlebigquery" },
      { name: "Snowflake", slug: "snowflake" },
      { name: "Docker", slug: "docker" },
      { name: "Terraform", slug: "terraform" },
      { name: "Vercel", slug: "vercel" },
      { name: "Neon", slug: "neon" },
    ],
  },
  {
    label: "Full-Stack Dev",
    skills: [
      { name: "Next.js", slug: "nextdotjs", hot: true },
      { name: "TypeScript", slug: "typescript", hot: true },
      { name: "React", slug: "react" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "REST/GraphQL APIs", slug: "graphql" },
    ],
  },
  {
    label: "ML & Analytics",
    skills: [
      { name: "scikit-learn", slug: "scikitlearn", hot: true },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Vertex AI", slug: "googlecloud" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "OpenAI APIs" },
    ],
  },
  {
    label: "Visualization & BI",
    skills: [
      { name: "Tableau", hot: true },
      { name: "Power BI", hot: true },
      { name: "Metabase", slug: "metabase", hot: true },
      { name: "Looker Studio", slug: "looker" },
    ],
  },
  {
    label: "Engineering",
    skills: [
      { name: "Mechanical Eng.", hot: true },
      { name: "Thermodynamics" },
      { name: "Applied Math" },
      { name: "Statistics" },
      { name: "Predictive Modeling" },
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-20 bg-paper relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal max-w-3xl">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Technical Stack
          </h2>
        </div>

        <div className="space-y-7">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
              <span className="font-body text-xs font-medium uppercase tracking-wide text-muted md:w-36 shrink-0 md:pt-1">
                {cat.label}
              </span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="inline-flex items-center gap-1.5">
                    {skill.slug && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`https://cdn.simpleicons.org/${skill.slug}`}
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4 shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <span
                      className={
                        skill.hot
                          ? "font-semibold text-signal text-[15px]"
                          : "text-ink text-[15px]"
                      }
                    >
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
