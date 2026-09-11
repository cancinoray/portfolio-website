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
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Credentials
          </h2>
          <span className="font-mono text-xs text-muted">
            {String(certificates.length).padStart(2, "0")} certs
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-surface border border-rule overflow-hidden hover:border-signal transition-colors group"
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
