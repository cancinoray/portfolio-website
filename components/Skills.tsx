"use client";

import { useReveal } from "@/lib/useReveal";

type SkillCategory = {
  icon: string;
  label: string;
  skills: { name: string; hot?: boolean }[];
};

const skillCategories: SkillCategory[] = [
  {
    icon: "⚡",
    label: "Data Engineering",
    skills: [
      { name: "Python", hot: true },
      { name: "SQL", hot: true },
      { name: "Apache Airflow", hot: true },
      { name: "dbt", hot: true },
      { name: "Spark" },
      { name: "Kafka" },
      { name: "PostgreSQL" },
      { name: "Pandas" },
    ],
  },
  {
    icon: "☁",
    label: "Cloud & Infra",
    skills: [
      { name: "GCP", hot: true },
      { name: "AWS", hot: true },
      { name: "BigQuery" },
      { name: "Snowflake" },
      { name: "Docker" },
      { name: "Terraform" },
      { name: "Vercel" },
      { name: "Neon" },
    ],
  },
  {
    icon: "◈",
    label: "Full-Stack Dev",
    skills: [
      { name: "Next.js", hot: true },
      { name: "TypeScript", hot: true },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "REST/GraphQL APIs" },
    ],
  },
  {
    icon: "◉",
    label: "ML & Analytics",
    skills: [
      { name: "scikit-learn", hot: true },
      { name: "TensorFlow" },
      { name: "Vertex AI" },
      { name: "Hugging Face" },
      { name: "OpenAI APIs" },
    ],
  },
  {
    icon: "▦",
    label: "Visualization & BI",
    skills: [
      { name: "Tableau", hot: true },
      { name: "Power BI", hot: true },
      { name: "Metabase" },
      { name: "Looker Studio" },
    ],
  },
  {
    icon: "△",
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
    <section id="skills" className="pt-0 pb-24 relative z-10 border-t border-ash/30">

      <div ref={ref} className="max-w-6xl mx-auto px-6 reveal">
        <p className="section-num mb-3">02 — Skills</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-snow tracking-tighter mb-12">
          Technical Stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="card-dark rounded-xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-neon/60 text-lg font-mono">{cat.icon}</span>
                <span className="font-mono text-[11px] text-fog uppercase tracking-[0.15em]">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full border transition-all duration-300 ${
                      skill.hot
                        ? "bg-neon/[0.08] border-neon/20 text-neon group-hover:bg-neon/[0.12] group-hover:border-neon/30"
                        : "bg-smoke/50 border-ash/50 text-fog group-hover:border-ash"
                    }`}
                  >
                    {skill.name}
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
