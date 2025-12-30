"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16"
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center`}
      >
        <div className="w-full md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-64 rounded-lg shadow-2xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold mb-4 text-dark dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          {project.stack && (
            <div className="mb-4">
              <p className="font-semibold mb-2 text-dark dark:text-white">Stack:</p>
              <ul className="space-y-1">
                {project.stack.map((tech, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    ✅ <strong>{tech}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.features && (
            <div className="mb-4">
              <p className="font-semibold mb-2 text-dark dark:text-white">Features:</p>
              <ul className="space-y-1">
                {project.features.map((feature, idx) => {
                  const parts = feature.includes(":") ? feature.split(":") : [feature];
                  return (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      ✅{" "}
                      {parts.length > 1 ? (
                        <>
                          <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
                        </>
                      ) : (
                        <strong>{parts[0]}</strong>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                See Live
              </a>
            )}
            {project.courseUrl && (
              <a
                href={project.courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                Course
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

