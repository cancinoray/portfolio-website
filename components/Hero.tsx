"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "@/lib/animations";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-primary text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          className="text-center"
        >
          <motion.h1
            variants={fadeInLeft}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, my name is{" "}
            <span className="text-yellow-300 dark:text-yellow-400">Ray!</span>
            <br />
            <br />
            I&apos;m an{" "}
            <span className="text-yellow-300 dark:text-yellow-400">Engineer</span> |{" "}
            <br className="md:hidden" />
            <span className="text-yellow-300 dark:text-yellow-400">
              Web Developer
            </span>{" "}
            | <span className="text-yellow-300 dark:text-yellow-400">Educator</span> |
            <br className="md:hidden" />
            <span className="text-yellow-300 dark:text-yellow-400">
              Data Enthusiast
            </span>
            .
          </motion.h1>
          <motion.div variants={fadeInUp} className="mt-8">
            <button
              onClick={scrollToAbout}
              aria-label="Scroll to about section"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              Know more
              <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}

