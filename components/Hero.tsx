"use client";

const RESUME_URL =
  "https://drive.google.com/file/d/10nixZnwbBtAYzB-wXK0ZibS3YzUrPl-D/view?usp=sharing";

const chips = [
  { label: "Data Engineer", primary: true },
  { label: "Full-Stack Dev", primary: false },
  { label: "EdTech Co-Founder", primary: false },
  { label: "ME Educator", primary: false },
  { label: "Python · SQL · Next.js", primary: false },
];

const metrics = [
  { value: "5+", label: "Projects Shipped", accent: "bg-signal" },
  { value: "3+", label: "Years in Data", accent: "bg-mint" },
  { value: "4", label: "Companies", accent: "bg-amber" },
  { value: "ME", label: "Engineering Roots", accent: "bg-slate" },
];

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 mb-6 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
            <span className="font-mono text-xs text-muted tracking-wide">
              Open to opportunities · Philippines-based
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold tracking-tightest leading-[1.05] mb-4 animate-fade-up"
            style={{
              fontSize: "clamp(56px, 9vw, 108px)",
              animationDelay: "100ms",
            }}
          >
            Raymond{" "}
            <span className="text-signal">Cancino.</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-serif italic text-muted text-lg md:text-xl max-w-xl mb-8 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Building systems that teach, and teaching people to build.
          </p>

          {/* Chips */}
          <div
            className="flex flex-wrap gap-2 mb-8 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {chips.map((chip) => (
              <span
                key={chip.label}
                className={`chip ${
                  chip.primary
                    ? "bg-slate text-white border-slate"
                    : "bg-chalk text-muted border-rule"
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "400ms" }}
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
          </div>

          {/* Metrics bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-rule rounded-lg bg-surface overflow-hidden animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`relative p-5 text-center ${
                  i < metrics.length - 1 ? "border-r border-rule" : ""
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] ${m.accent}`}
                />
                <p className="text-2xl font-display font-extrabold tracking-tight">
                  {m.value}
                </p>
                <p className="text-[11px] font-mono text-muted uppercase tracking-wider mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
