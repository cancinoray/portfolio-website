"use client";

import { useReveal } from "@/lib/useReveal";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "cancinoray@gmail.com",
    href: "mailto:cancinoray@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/cancinoraymond",
    href: "https://www.linkedin.com/in/cancinoraymond/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "cancinoray",
    href: "https://github.com/cancinoray",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-0 pb-24 relative z-10 border-t border-ash/30">
      <ContactInner />
    </section>
  );
}

function ContactInner() {
  const ref = useReveal();

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 reveal">

      <p className="section-num mb-3">06 — Contact</p>

      <div className="grid md:grid-cols-2 gap-16 mt-10">
        {/* Left */}
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-snow tracking-tighter leading-[1.05]">
            Let&apos;s
            <br />
            <span className="text-gradient">Build</span>
            <br />
            Something.
          </h2>
          <p className="font-serif italic text-fog mt-5 text-lg">
            Always open to interesting conversations and collaborations.
          </p>

          <div className="space-y-2 mt-10">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-ash/50 rounded-xl hover:border-neon/30 hover:bg-neon/[0.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="w-4 h-4 text-fog/40 group-hover:text-neon transition-colors duration-300" />
                  <div>
                    <p className="text-[10px] font-mono text-fog/40 uppercase tracking-[0.2em]">
                      {link.label}
                    </p>
                    <p className="text-sm text-cloud/80 font-mono mt-0.5">
                      {link.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-fog/20 group-hover:text-neon transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="card-dark rounded-2xl p-8 text-center relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/[0.05] rounded-full blur-3xl" />

              <span className="inline-flex items-center gap-2 text-[11px] font-mono text-neon bg-neon/[0.06] border border-neon/15 px-3.5 py-1.5 rounded-full relative">
                <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-dot" />
                Available for hire
              </span>
              <h3 className="text-xl font-display font-bold text-snow mt-5 relative">
                Ready to collaborate?
              </h3>
              <p className="font-serif text-sm text-fog/60 mt-3 leading-relaxed relative">
                I&apos;m looking for data engineering roles, freelance projects,
                and startup partnerships.
              </p>
              <a
                href="mailto:cancinoray@gmail.com"
                className="btn-primary mt-6 inline-flex relative"
              >
                Send a Message
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
