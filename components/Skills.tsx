"use client";

import { useReveal } from "@/lib/useReveal";

type SkillCategory = {
  icon: string;
  label: string;
  skills: { name: string; hot?: boolean }[];
};

const skillCategories: SkillCategory[] = [
  {
    icon: "🔧",
    label: "Data Engineering",
    skills: [
      { name: "Python", hot: true },
      { name: "SQL", hot: true },
      { name: "Apache Airflow" },
      { name: "dbt" },
      { name: "ClickHouse" },
      { name: "PostgreSQL" },
      { name: "PySpark" },
      { name: "Pandas" },
    ],
  },
  {
    icon: "☁️",
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
    icon: "🌐",
    label: "Full-Stack Dev",
    skills: [
      { name: "Next.js", hot: true },
      { name: "TypeScript", hot: true },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "REST APIs" },
    ],
  },
  {
    icon: "🤖",
    label: "ML & Analytics",
    skills: [
      { name: "Metabase", hot: true },
      { name: "scikit-learn" },
      { name: "TensorFlow" },
      { name: "Mapbox" },
    ],
  },
  {
    icon: "⚙️",
    label: "Tools & Workflow",
    skills: [
      { name: "Git/GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Notion" },
    ],
  },
  {
    icon: "📐",
    label: "Engineering",
    skills: [
      { name: "Mechanical Eng.", hot: true },
      { name: "Thermodynamics" },
      { name: "Applied Math" },
      { name: "PRC Board Prep" },
      { name: "Curriculum Design" },
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-20 bg-slate relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
          02 · Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight mb-10">
          Technical Stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white/5 border border-white/10 rounded-lg p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{cat.icon}</span>
                <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      skill.hot
                        ? "bg-mint/15 border-mint/35 text-mint"
                        : "bg-white/[0.07] border-white/[0.12] text-white/75"
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
