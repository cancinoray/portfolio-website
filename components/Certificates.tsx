"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-dark dark:text-white"
        >
          Certificates & Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {certificate.image ? (
                <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="p-6 pb-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg w-fit">
                    <Award className="w-8 h-8 text-primary dark:text-primary-light" />
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark dark:text-white">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  {certificate.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {certificate.date}
                </p>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary dark:text-primary-light hover:underline font-semibold"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

