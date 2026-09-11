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
        ink: "#0A0A0A",
        paper: "#FAFAF9",
        chalk: "#F1F1EE",
        surface: "#FFFFFF",
        muted: "#767676",
        rule: "#E7E5E2",
        slate: "#0A0A0A",
        signal: "#1D4ED8",
        amber: "#1D4ED8",
        mint: "#1E9E6B",
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
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
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
        "blink": "blink 1.1s step-end infinite",
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
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
