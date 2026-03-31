"use client";

import { useReveal } from "@/lib/useReveal";
import { certificates } from "@/data/certificates";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Certificates() {
  const ref = useReveal();

  return (
    <section id="certificates" className="pt-0 pb-24 relative z-10 border-t border-ash/30">

      <div ref={ref} className="max-w-6xl mx-auto px-6 reveal">
        <p className="section-num mb-3">05 — Certificates</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-snow tracking-tighter mb-12">
          Credentials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="card-dark rounded-xl overflow-hidden group"
            >
              {certificate.image ? (
                <div className="relative w-full h-44 bg-smoke overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                </div>
              ) : (
                <div className="p-6 pb-2">
                  <div className="p-3 bg-neon/[0.08] rounded-lg w-fit border border-neon/10">
                    <span className="text-neon text-lg">◆</span>
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display font-bold text-snow text-sm leading-snug group-hover:text-neon transition-colors duration-300">
                  {certificate.title}
                </h3>
                <p className="font-mono text-[11px] text-fog mt-1.5">
                  {certificate.issuer}
                </p>
                <p className="font-mono text-[10px] text-fog/40 mt-0.5">
                  {certificate.date}
                </p>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neon/70 text-[11px] font-mono mt-3 hover:text-neon transition-colors duration-300"
                  >
                    View Credential
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
