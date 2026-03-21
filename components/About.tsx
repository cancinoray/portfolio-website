"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const RESUME_URL =
  "https://drive.google.com/file/d/10nixZnwbBtAYzB-wXK0ZibS3YzUrPl-D/view?usp=sharing";

const meta = [
  { label: "Location", value: "Philippines" },
  { label: "Role", value: "Data Engineer" },
  { label: "Startup", value: "Carnot Coaching Center" },
  { label: "Status", value: "● Available", isMint: true },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-20 bg-chalk relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
          01 · About
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
          {/* Left — Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-sm rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/profile.jpg"
                alt="Raymond Cancino"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-slate/90 text-white text-[11px] font-mono px-3 py-1.5 rounded">
                📍 Philippines
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="space-y-5">
            <blockquote className="font-serif italic text-lg text-muted leading-relaxed border-l-2 border-signal pl-4">
              &ldquo;From thermal cycles to data pipelines — I bridge mechanical
              engineering thinking with modern data and software
              practice.&rdquo;
            </blockquote>

            <p className="text-ink/80 leading-relaxed">
              I&apos;m a Data Engineer with a strong foundation in engineering
              and applied mathematics, focused on building scalable data
              pipelines, analytics workflows, and AI/ML applications. With
              experience across remote teams and global startups, I bring
              technical expertise and adaptability to fast-paced environments.
            </p>
            <p className="text-ink/80 leading-relaxed">
              I specialize in Python, SQL, dbt, Airflow, and cloud platforms
              (GCP, AWS, Snowflake, BigQuery), leveraging these tools to design
              pipelines, automate workflows, and drive data-informed
              decision-making. My background as a Mechanical Engineering
              graduate and university instructor adds a structured,
              problem-solving mindset to my tech career.
            </p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-0 border border-rule rounded-lg overflow-hidden mt-6">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="bg-chalk border-b border-r border-rule p-3"
                >
                  <p className="text-[10px] font-mono text-muted uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p
                    className={`text-sm font-display font-bold mt-0.5 ${
                      item.isMint ? "text-mint" : "text-ink"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-flex"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
