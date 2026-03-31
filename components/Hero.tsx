"use client";

import { motion } from "framer-motion";

const RESUME_URL =
  "https://drive.google.com/file/d/10nixZnwbBtAYzB-wXK0ZibS3YzUrPl-D/view?usp=sharing";

const roles = ["Data Engineer", "Full-Stack Dev", "EdTech Co-Founder", "ME Educator"];

const metrics = [
  { value: "5+", label: "Projects Shipped" },
  { value: "3+", label: "Years in Data" },
  { value: "4", label: "Companies" },
  { value: "ME", label: "Engineering Roots" },
];

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-neon/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-volt/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono text-neon/80 bg-neon/[0.06] border border-neon/10 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-dot" />
              Open to opportunities
            </span>
            <span className="text-[11px] font-mono text-fog">
              Philippines-based
            </span>
          </motion.div>

          {/* Name — oversized, dramatic */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold tracking-tightest leading-[0.95] mb-6"
            style={{
              fontSize: "clamp(52px, 10vw, 120px)",
            }}
          >
            <span className="text-snow">Raymond</span>
            <br />
            <span className="text-gradient glow-text">Cancino.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-serif italic text-fog text-lg md:text-xl max-w-lg mb-8"
          >
            Engineer. Educator. Data-driven builder.
          </motion.p>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {roles.map((role, i) => (
              <span
                key={role}
                className={`text-[11px] font-mono px-3.5 py-1.5 rounded-full border transition-colors duration-300 ${
                  i === 0
                    ? "bg-neon/10 text-neon border-neon/25"
                    : "bg-smoke/60 text-fog border-ash/60 hover:border-fog/40"
                }`}
              >
                {role}
              </span>
            ))}
            <span className="text-[11px] font-mono px-3.5 py-1.5 rounded-full border bg-smoke/60 text-fog border-ash/60">
              Python · SQL · Next.js
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View Resume
            </a>
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-ash/50 rounded-xl bg-graphite/50 backdrop-blur-sm overflow-hidden"
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`relative p-6 text-center group ${
                  i < metrics.length - 1
                    ? "border-r border-ash/30"
                    : ""
                } ${i < 2 ? "border-b md:border-b-0 border-ash/30" : ""}`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-2xl md:text-3xl font-display font-extrabold text-snow tracking-tight">
                  {m.value}
                </p>
                <p className="text-[10px] font-mono text-fog uppercase tracking-[0.2em] mt-1.5">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="hidden lg:block absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ash/40 to-transparent origin-top"
        />
      </div>
    </section>
  );
}
