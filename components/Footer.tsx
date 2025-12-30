"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mb-8 p-3 bg-primary rounded-full hover:bg-primary-light transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
          <div className="flex gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/cancinoraymond/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/cancinoray"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <hr className="w-full border-gray-700 mb-6" />
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} -{" "}
            <a
              href="https://github.com/cancinoray"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Raymond Cancino
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

