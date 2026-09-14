"use client";

import { useReveal } from "@/lib/useReveal";

type ExperienceItem = {
  period: string;
  company: string;
  type: string;
  role: string;
  bullets: string[];
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: "Jun 2026–Present",
    company: "Data Engineering Pilipinas (DEP)",
    type: "Volunteer · Remote, Philippines",
    role: "Systems Lead",
    bullets: [
      "Serve as Systems Lead for DEP's community-powered Data Engineering Program, a 6-month build sprint where 50 selected builders ship a public GitHub project, a real data pipeline, and a deployable dashboard.",
      "Support program systems and infrastructure for milestone review and mentorship across the 2026 cohort.",
    ],
    tags: ["Community", "Mentorship", "Python", "SQL"],
  },
  {
    period: "Mar 2026–Present",
    company: "ARES Information Technology Solutions",
    type: "Founder · Philippines",
    role: "Founder",
    bullets: [
      'Built and lead a data/BI consultancy delivering "Command Center" dashboards for retail and e-commerce SMEs, consolidating inventory, sales, and margin data scattered across incompatible tools into a single real-time view.',
      "Run client engagements end-to-end: data audits, systems integration, dashboard builds, and ongoing monitoring retainers.",
    ],
    tags: ["Data Audits", "Systems Integration", "BI", "SME", "Dashboards"],
  },
  {
    period: "Feb 2026–Present",
    company: "Carnot Coaching Center",
    type: "EdTech · PH",
    role: "Co-Founder & Tech Lead",
    bullets: [
      "Co-founded an EdTech startup targeting Philippine engineering licensure examinees.",
      "Leading frontend development, infrastructure setup, data strategy, and go-to-market planning for the August 2026 MELE cohort launch.",
    ],
    tags: [
      "Next.js",
      "PostgreSQL",
      "Vercel",
      "Product Strategy",
      "Team Leadership",
    ],
  },
  {
    period: "Oct 2025–Present",
    company: "Bogucki Enterprises",
    type: "Remote · Philadelphia, PA, USA",
    role: "Data Engineer",
    bullets: [
      "Administer AWS infrastructure (EC2, S3, Lambda, RDS, DynamoDB) powering production data engineering workloads.",
      "Architect Python ETL pipelines in Airflow and dbt transformation models; established OpenMetadata as the data catalog.",
      "Build Metabase dashboards for stakeholder self-service reporting.",
      "Set up Grafana dashboards and alerts for pipeline and infrastructure observability.",
    ],
    tags: ["AWS", "Airflow", "dbt", "OpenMetadata", "Metabase", "Grafana"],
  },
  {
    period: "Apr 2025–Oct 2025",
    company: "Mindwyre",
    type: "Remote · Idaho, USA",
    role: "Data Engineer",
    bullets: [
      "Designed and implemented a data pipeline for AdTech data ingestion and transformation, enabling reliable reporting and analytics.",
      "Trained and deployed a classification model to automatically categorize project codes and labels.",
      "Utilized SQL, Tableau, and Power BI for advanced reporting, delivering actionable insights to stakeholders.",
      "Translated ad-ops stakeholder questions into pipeline and modeling requirements, and presented findings back in plain business terms.",
    ],
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
    bullets: [
      "Designed and maintained data pipelines integrating e-commerce platforms (Wix, TikTok Shop, Walmart, Shein).",
      "Built ETL workflows using Airflow and dbt, reducing manual data prep time by 25%.",
      "Developed internal dashboards for analytics and experimented with Vertex AI models for product recommendations.",
      "Diagnosed and resolved recurring data mismatches between platforms with no shared schema, the kind of ambiguous, client-facing problem that has no clean spec.",
    ],
    tags: ["Airflow", "dbt", "Vertex AI", "ETL", "E-Commerce", "Dashboards"],
  },
  {
    period: "Aug 2021–Apr 2022",
    company: "Sumi North Philippines",
    type: "Wiring System · Pangasinan, PH",
    role: "Production Division Staff",
    bullets: [
      "Designed and implemented process improvements in production, contributing to increased team efficiency.",
      "Applied data analysis to identify bottlenecks and improved output efficiency by 15%.",
      "Led a small team of engineers and production workers.",
    ],
    tags: ["Process Improvement", "Data Analysis", "Team Leadership"],
  },
  {
    period: "Aug 2020–Dec 2024",
    company: "Virgen Milagrosa University Foundation",
    type: "Part-time · Pangasinan, PH",
    role: "University Instructor",
    bullets: [
      "Taught foundational engineering courses, including Algebra, Trigonometry, Calculus, and Thermodynamics.",
      "Supervised junior students in Mechanical Engineering, guiding them through academic and project-based work.",
    ],
    tags: ["Thermodynamics", "Calculus", "Applied Math", "Curriculum Design"],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-20 bg-paper relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Work History
          </h2>
          <span className="font-mono text-xs text-muted">
            {String(experiences.length).padStart(2, "0")} positions
          </span>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`grid md:grid-cols-[180px_1fr] gap-4 md:gap-6 py-7 ${
                i < experiences.length - 1 ? "border-b border-rule" : ""
              } ${i === 0 ? "pt-0" : ""}`}
            >
              {/* Left meta */}
              <div>
                <p
                  className={`font-body text-[13px] ${
                    exp.period.endsWith("Present")
                      ? "text-signal font-medium"
                      : "text-muted"
                  }`}
                >
                  {exp.period}
                </p>
              </div>

              {/* Right content */}
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  {exp.role}{" "}
                  <span className="font-body font-normal text-muted text-base">
                    · {exp.company}
                  </span>
                </h3>
                <p className="font-mono text-[10px] text-muted uppercase tracking-wider mt-1">
                  {exp.type}
                </p>
                <ul className="font-body text-sm text-ink/70 mt-3 leading-relaxed list-disc pl-4 space-y-1 max-w-2xl">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 text-muted border border-rule"
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
