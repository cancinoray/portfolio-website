"use client";

import { useReveal } from "@/lib/useReveal";
import { certificates } from "@/data/certificates";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Certificates() {
  const ref = useReveal();

  return (
    <section id="certificates" className="py-20 bg-paper relative z-10">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
          05 · Certificates
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ink tracking-tight mb-10">
          Credentials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-surface border border-rule rounded-lg overflow-hidden hover:border-signal transition-colors group"
            >
              {certificate.image ? (
                <div className="relative w-full h-44 bg-chalk">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="p-5 pb-3">
                  <div className="p-2.5 bg-signal/10 rounded-lg w-fit">
                    <Award className="w-6 h-6 text-signal" />
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display font-extrabold text-ink text-sm leading-snug group-hover:text-signal transition-colors">
                  {certificate.title}
                </h3>
                <p className="font-mono text-[11px] text-muted mt-1">
                  {certificate.issuer}
                </p>
                <p className="font-mono text-[10px] text-muted/60 mt-0.5">
                  {certificate.date}
                </p>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-signal text-xs font-mono mt-3 hover:underline"
                  >
                    View Credential
                    <ExternalLink className="w-3.5 h-3.5" />
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
