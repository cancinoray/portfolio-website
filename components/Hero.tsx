"use client";

const RESUME_URL = "/assets/resume.pdf";

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
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 mb-7 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
            <span className="font-body text-xs font-medium uppercase tracking-wide text-muted">
              Open to FDE, Data &amp; Software Engineering roles ·
              Philippines-based
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold tracking-tightest leading-[1.0] mb-6 animate-fade-up"
            style={{
              fontSize: "clamp(48px,8vw,84px)",
              animationDelay: "100ms",
            }}
          >
            Raymond
            <br />
            Cancino
            <span className="cursor-blink">_</span>
          </h1>

          {/* Role line */}
          <p
            className="font-display font-bold text-xl md:text-2xl text-muted mb-7 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Data Engineer <span className="text-ink">→</span> Forward Deployed
            Engineer
          </p>

          {/* Tagline */}
          <p
            className="font-body text-lg text-ink/80 max-w-xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            I help e-commerce and ops teams make sense of data that doesn&apos;t
            agree with itself.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
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
        </div>
      </div>
    </section>
  );
}
