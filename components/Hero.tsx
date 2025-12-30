"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, textVariant, floatingAnimation, scaleIn } from "@/lib/animations";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animated background circles
  const circles = Array.from({ length: 5 }, (_, i) => i);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-primary text-white relative overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="text-center"
        >
          <motion.div variants={textVariant}>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
            >
              Hi, my name is{" "}
              <motion.span
                className="text-yellow-300 dark:text-yellow-400 inline-block"
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                Ray!
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            variants={textVariant}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              I&apos;m an{" "}
            </motion.span>
            <motion.span
              className="text-yellow-300 dark:text-yellow-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            >
              Engineer
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {" "}|{" "}
            </motion.span>
            <br className="md:hidden" />
            <motion.span
              className="text-yellow-300 dark:text-yellow-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
            >
              Web Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              {" "}|{" "}
            </motion.span>
            <motion.span
              className="text-yellow-300 dark:text-yellow-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
            >
              Educator
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              {" "}|{" "}
            </motion.span>
            <br className="md:hidden" />
            <motion.span
              className="text-yellow-300 dark:text-yellow-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.6, type: "spring", stiffness: 200 }}
            >
              Data Enthusiast
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              .
            </motion.span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3.0 }}
            className="mt-8"
          >
            <motion.button
              onClick={scrollToAbout}
              aria-label="Scroll to about section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              Know more
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingAnimation}
        animate="animate"
      >
        <ArrowDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  );
}

