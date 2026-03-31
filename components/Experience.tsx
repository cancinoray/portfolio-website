"use client";

import { useReveal } from "@/lib/useReveal";

type ExperienceItem = {
  period: string;
  company: string;
  type: string;
  role: string;
  description: string;
  tags: string[];
  current?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    period: "Feb 2026–Present",
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
    current: true,
  },
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
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="pt-0 pb-24 relative z-10 border-t border-ash/30">

      <div ref={ref} className="max-w-6xl mx-auto px-6 reveal">
        <p className="section-num mb-3">04 — Experience</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-snow tracking-tighter mb-12">
          Work History
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-neon/30 via-ash/40 to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="relative pl-10 pb-10 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 transition-colors duration-300 ${
                  exp.current
                    ? "border-neon bg-neon/20 shadow-[0_0_10px_rgba(0,229,159,0.3)]"
                    : "border-ash bg-graphite group-hover:border-neon/50"
                }`} />

                <div className="card-dark rounded-xl p-5 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-snow text-lg">
                        {exp.role}
                      </h3>
                      <p className="font-display font-medium text-neon/80 text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[11px] font-mono text-fog">
                        {exp.period}
                      </p>
                      <p className="text-[10px] font-mono text-fog/50 uppercase tracking-wider mt-0.5">
                        {exp.type}
                      </p>
                    </div>
                  </div>

                  <p className="font-serif text-sm text-fog leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-smoke/50 text-fog/70 border border-ash/40"
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
      </div>
    </section>
  );
}
