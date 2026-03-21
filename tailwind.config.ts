import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0E0F0C",
        paper: "#F0EDE4",
        chalk: "#F5F4EE",
        surface: "#FFFFFF",
        muted: "#8A8880",
        rule: "#DEDAD2",
        slate: "#1B2A3B",
        signal: "#0062FF",
        amber: "#E8871A",
        mint: "#00C896",
        // Legacy aliases
        primary: {
          DEFAULT: "#1B2A3B",
          light: "#0062FF",
        },
        secondary: {
          DEFAULT: "#0062FF",
        },
        dark: {
          DEFAULT: "#0E0F0C",
          grey: "#1B2A3B",
        },
        light: {
          DEFAULT: "#F0EDE4",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-martian)", "ui-monospace", "monospace"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-up": "fadeUp 0.6s ease-out both",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
