"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";

const RESUME_URL =
  "https://drive.google.com/file/d/10nixZnwbBtAYzB-wXK0ZibS3YzUrPl-D/view?usp=sharing";

const meta = [
  { label: "Location", value: "Philippines" },
  { label: "Role", value: "Data Engineer" },
  { label: "Startup", value: "Carnot Coaching Center" },
  { label: "Status", value: "Available", isNeon: true },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="pt-0 pb-24 relative z-10 border-t border-ash/30">

      <div ref={ref} className="max-w-6xl mx-auto px-6 reveal">
        <p className="section-num mb-3">01 — About</p>

        <div className="grid md:grid-cols-5 gap-12 items-start mt-10">
          {/* Left — Photo (2 cols) */}
          <div className="md:col-span-2 relative">
            <div className="relative w-full aspect-[4/5] max-w-sm rounded-xl overflow-hidden">
              <Image
                src="/assets/profile.jpg"
                alt="Raymond Cancino"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-dot" />
                <span className="text-[11px] font-mono text-snow/80">
                  Philippines
                </span>
              </div>
            </div>
            {/* Decorative glow behind photo */}
            <div className="absolute -inset-4 bg-neon/[0.03] rounded-2xl blur-2xl -z-10" />
          </div>

          {/* Right — Bio (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-snow tracking-tighter mb-4">
              About Me
            </h2>

            <blockquote className="font-serif italic text-xl md:text-2xl text-fog leading-snug border-l-2 border-neon/40 pl-5">
              &ldquo;Engineered in the classroom. Refined in the codebase.&rdquo;
            </blockquote>

            <p className="font-serif text-base text-cloud/70 leading-[1.8]">
              I&apos;m a Data Engineer with a strong foundation in engineering
              and applied mathematics, focused on building scalable data
              pipelines, analytics workflows, and AI/ML applications. With
              experience across remote teams and global startups, I bring
              technical expertise and adaptability to fast-paced environments.
            </p>
            <p className="font-serif text-base text-cloud/70 leading-[1.8]">
              I specialize in Python, SQL, dbt, Airflow, and cloud platforms
              (GCP, AWS, Snowflake, BigQuery), leveraging these tools to design
              pipelines, automate workflows, and drive data-informed
              decision-making. My background as a Mechanical Engineering
              graduate and university instructor adds a structured,
              problem-solving mindset to my tech career.
            </p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-px bg-ash/30 rounded-xl overflow-hidden mt-8">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="bg-graphite p-4"
                >
                  <p className="text-[10px] font-mono text-fog/60 uppercase tracking-[0.2em]">
                    {item.label}
                  </p>
                  <p
                    className={`text-sm font-display font-bold mt-1 ${
                      item.isNeon ? "text-neon" : "text-snow"
                    }`}
                  >
                    {item.isNeon && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon mr-2 animate-pulse-dot" />
                    )}
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 inline-flex"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
