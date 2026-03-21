"use client";

import { useReveal } from "@/lib/useReveal";
import { Mail, Linkedin, Github } from "lucide-react";

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
    <section id="contact" className="py-20 bg-slate relative z-10">
      <ContactInner />
    </section>
  );
}

function ContactInner() {
  const ref = useReveal();

  return (
    <div ref={ref} className="container mx-auto px-4 reveal">
      <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
        06 · Contact
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        {/* Left */}
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s
            <br />
            <span className="text-signal">Build</span>
            <br />
            Something.
          </h2>
          <p className="font-serif italic text-white/50 mt-4 text-lg">
            Always open to interesting conversations and collaborations.
          </p>

          <div className="space-y-3 mt-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-signal transition-colors group"
              >
                <link.icon className="w-5 h-5 text-white/40 group-hover:text-signal transition-colors" />
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm text-white/80 font-mono">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center max-w-sm w-full">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono text-mint bg-mint/10 border border-mint/20 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse-dot" />
              Available for hire
            </span>
            <h3 className="text-xl font-display font-extrabold text-white mt-4">
              Ready to collaborate?
            </h3>
            <p className="font-mono text-xs text-white/50 mt-2 leading-relaxed">
              I&apos;m looking for data engineering roles, freelance projects,
              and startup partnerships.
            </p>
            <a
              href="mailto:cancinoray@gmail.com"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-signal text-white rounded-lg font-mono text-sm hover:bg-signal/90 transition-colors"
            >
              Send a Message →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
