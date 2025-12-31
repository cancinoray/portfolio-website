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
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-dark dark:text-white">
              Hello, I&apos;m Ray!
            </h1>
            <p className="text-lg font-semibold text-primary dark:text-primary-light mb-6">
              Data Engineer | Machine Learning Enthusiast | Remote-Ready | Skilled in Python, Airflow, dbt, SQL, & Cloud | Bridging Engineering & Data to Deliver Scalable Solutions
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I&apos;m a Data Engineer with a strong foundation in engineering and applied mathematics, now focused on building scalable data pipelines, analytics workflows, and AI/ML applications. With experience across remote teams and global startups, I bring both technical expertise and adaptability to fast-paced environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I specialize in Python, SQL, dbt, Airflow, and cloud platforms (GCP, AWS, Snowflake, BigQuery), leveraging these tools to design pipelines, automate workflows, and drive data-informed decision-making. My background as a Mechanical Engineering graduate and former university instructor adds a structured, problem-solving mindset to my tech career.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Currently, I&apos;m passionate about transforming raw data into actionable insights and exploring how machine learning can enhance business workflows. My career goal is to grow into leading data teams and mentoring future consultants—while contributing to startups and organizations that value innovation, efficiency, and collaboration.
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

