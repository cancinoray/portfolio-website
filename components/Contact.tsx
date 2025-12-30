"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-dark dark:text-white">
            Contact
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Need to know more?
          </p>
          <a
            href="mailto:cancinoray@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            CONNECT HERE!
          </a>
        </motion.div>
      </div>
    </section>
  );
}

