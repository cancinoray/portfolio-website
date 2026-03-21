"use client";

import { useReveal } from "@/lib/useReveal";

type ExperienceItem = {
  period: string;
  company: string;
  type: string;
  role: string;
  description: string;
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: "Apr 2025–Oct 2025",
    company: "Mindwyre",
    type: "Remote · Idaho, USA",
    role: "Data Engineer",
    description:
      "Designed and implemented a data pipeline for AdTech data ingestion and transformation, enabling reliable reporting and analytics. Trained and deployed a classification model to automatically categorize project codes and labels. Utilized SQL, Tableau, and Power BI for advanced reporting, delivering actionable insights to stakeholders.",
    tags: [
      "SQL",
      "Tableau",
      "Power BI",
      "Python",
      "ML Classification",
      "AdTech",
    ],
  },
  {
    period: "Jul 2022–Feb 2025",
    company: "GrandShipper",
    type: "Remote · New York, USA",
    role: "Software Engineer",
    description:
      "Designed and maintained data pipelines integrating e-commerce platforms (Wix, TikTok Shop, Walmart, Shein). Built ETL workflows using Airflow and dbt, reducing manual data prep time by 25%. Developed internal dashboards for analytics and experimented with Vertex AI models for product recommendations.",
    tags: ["Airflow", "dbt", "Vertex AI", "ETL", "E-Commerce", "Dashboards"],
  },
  {
    period: "Aug 2021–Apr 2022",
    company: "Sumi North Philippines",
    type: "Wiring System · Pangasinan, PH",
    role: "Production Division Staff",
    description:
      "Designed and implemented process improvements in production, contributing to increased team efficiency. Applied data analysis to identify bottlenecks and improved output efficiency by 15%. Led a small team of engineers and production workers.",
    tags: ["Process Improvement", "Data Analysis", "Team Leadership"],
  },
  {
    period: "Aug 2020–Dec 2024",
    company: "Virgen Milagrosa University Foundation",
    type: "Part-time · Pangasinan, PH",
    role: "University Instructor",
    description:
      "Taught foundational engineering courses, including Algebra, Trigonometry, Calculus, and Thermodynamics. Supervised junior students in Mechanical Engineering, guiding them through academic and project-based work.",
    tags: [
      "Thermodynamics",
      "Calculus",
      "Applied Math",
      "Curriculum Design",
    ],
  },
  {
    period: "2024–Present",
    company: "Carnot Coaching Center",
    type: "EdTech · PH",
    role: "Co-Founder & Tech Lead",
    description:
      "Co-founded an EdTech startup targeting Philippine engineering licensure examinees. Leading frontend development, infrastructure setup, data strategy, and go-to-market planning for the August 2026 MELE cohort launch.",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Vercel",
      "Product Strategy",
      "Team Leadership",
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-20 bg-chalk relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
          04 · Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ink tracking-tight mb-10">
          Work History
        </h2>

        <div className="bg-surface border border-rule rounded-lg overflow-hidden">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`grid md:grid-cols-[200px_1fr] ${
                i < experiences.length - 1 ? "border-b border-rule" : ""
              }`}
            >
              {/* Left meta */}
              <div className="bg-chalk md:border-r border-rule p-5">
                <p className="text-sm font-mono text-signal font-medium">
                  {exp.period}
                </p>
                <p className="font-display font-bold text-ink text-sm mt-1">
                  {exp.company}
                </p>
                <p className="font-mono text-[10px] text-muted uppercase tracking-wider mt-0.5">
                  {exp.type}
                </p>
              </div>

              {/* Right content */}
              <div className="p-5">
                <h3 className="font-display font-extrabold text-ink">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-chalk text-muted border border-rule"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
