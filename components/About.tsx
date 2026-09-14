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
    <section id="about" className="py-20 bg-paper relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            About
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-sm rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/profile.jpg"
                alt="Raymond Cancino"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-ink/90 text-paper text-[11px] font-mono px-3 py-1.5 rounded-sm">
                📍 Philippines
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-5">
            <blockquote className="font-body italic text-lg text-muted leading-relaxed border-l-2 border-signal pl-4">
              &ldquo;I help teams that inherited chaos, mismatched platforms and
              no shared schema, ship something that holds.&rdquo;
            </blockquote>

            <p className="font-body text-ink/80 leading-relaxed">
              I&apos;m a Data Engineer who gets dropped into messy, real-world
              data and makes it work. Across e-commerce (Wix, TikTok Shop,
              Walmart, Shein), AdTech, and EdTech, I&apos;ve built pipelines
              that survive inconsistent schemas, duplicate records, and
              platforms that don&apos;t agree with each other, then shipped the
              fix, not just the diagnosis.
            </p>
            <p className="font-body text-ink/80 leading-relaxed">
              I specialize in Python, SQL, dbt, Airflow, and cloud platforms
              (GCP, AWS, Snowflake, BigQuery), and I deploy what I build
              (Docker, Terraform, Kubernetes), not just prototype it. My
              background as a Mechanical Engineering graduate and university
              instructor means I can take an ambiguous problem, structure it,
              and explain it clearly to whoever owns it, engineer or not.
            </p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-0 border border-rule mt-6">
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
