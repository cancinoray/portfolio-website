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
        void: "var(--color-void)",
        obsidian: "var(--color-obsidian)",
        graphite: "var(--color-graphite)",
        smoke: "var(--color-smoke)",
        ash: "var(--color-ash)",
        stone: "var(--color-stone)",
        fog: "var(--color-fog)",
        cloud: "var(--color-cloud)",
        snow: "var(--color-snow)",
        neon: "var(--color-neon)",
        ember: "var(--color-ember)",
        volt: "var(--color-volt)",
        // Legacy aliases for compatibility
        ink: "var(--color-obsidian)",
        paper: "var(--color-obsidian)",
        chalk: "var(--color-graphite)",
        surface: "var(--color-smoke)",
        muted: "var(--color-fog)",
        rule: "var(--color-ash)",
        slate: "var(--color-smoke)",
        signal: "var(--color-neon)",
        amber: "var(--color-ember)",
        mint: "var(--color-neon)",
        primary: {
          DEFAULT: "var(--color-smoke)",
          light: "var(--color-neon)",
        },
        secondary: {
          DEFAULT: "var(--color-neon)",
        },
        dark: {
          DEFAULT: "var(--color-void)",
          grey: "var(--color-smoke)",
        },
        light: {
          DEFAULT: "var(--color-obsidian)",
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-crimson)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "grain": "grain 0.5s steps(1) infinite",
        "line-grow": "lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "counter": "counter 2s cubic-bezier(0.16, 1, 0.3, 1) both",
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
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        counter: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
