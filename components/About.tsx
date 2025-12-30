"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { FileText } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-dark dark:text-white"
        >
          About me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/assets/profile.jpg"
                alt="Raymond Cancino - Mechanical Engineer, Web Developer, and Data Enthusiast"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-4"
          >
            <p className="text-lg font-semibold text-primary dark:text-primary-light">
              Mechanical Engineer | Web Developer | Data Enthusiast
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Hi there! I&apos;m a mechanical engineering graduate who ventured into
              web development and discovered a passion for data science along the way.
              For nearly two years, I&apos;ve been building websites and applications
              using frameworks like Vue, React, and Next.js, making projects smoother
              and more efficient.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These days, I&apos;m diving deeper into data science, machine learning
              fundamentals and data engineering—learning how to create and maintain
              data pipeline, build, evaluate, and deploy models, as well as discovering
              new ways to bring data insights into development. I love how data combines
              engineering and analytics to solve real-world problems, and I&apos;m
              excited about how these skills can enhance my work even more.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Outside of coding, you&apos;ll usually find me with a light novel, manga,
              or manhwa, or enjoying coffee shop vibes while exploring the latest in
              tech.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Let&apos;s connect if you&apos;re into data, development, or just want to
              chat about new tech trends!
            </p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/10nixZnwbBtAYzB-wXK0ZibS3YzUrPl-D/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

