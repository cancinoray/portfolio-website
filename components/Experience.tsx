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
  {
    period: "2023–Present",
    company: "University of Pangasinan",
    type: "PHINMA Education · PH",
    role: "ME Faculty Member",
    description:
      "Teaching Mechanical Engineering subjects at the College of Engineering and Architecture. Developing curricula combining engineering principles with modern computational tools.",
    tags: [
      "Thermodynamics",
      "Applied Math",
      "Curriculum Design",
      "PRC Board Prep",
    ],
  },
  {
    period: "2023–Present",
    company: "AR-ES Gift Shop",
    type: "Sole Proprietorship · PH",
    role: "Founder & Operator",
    description:
      "Running an online crafting and gifting business. Managing e-commerce operations, BIR compliance, and digital marketing alongside technical work.",
    tags: ["E-Commerce", "Operations", "BIR Compliance"],
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
