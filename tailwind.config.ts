import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        "electric-blue": "#3b82f6",
        "electric-blue-light": "#60a5fa",
        purple: "#8b5cf6",
        "purple-light": "#a78bfa",
        cyan: "#06b6d4",
        "cyan-light": "#22d3ee",
        "glass-bg": "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
        "muted-text": "rgba(255,255,255,0.5)",
        "subtle-text": "rgba(255,255,255,0.35)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(6,182,212,0.06) 0%, transparent 50%)",
        "hero-gradient":
          "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.10) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "blue-purple-gradient":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "cyan-blue-gradient":
          "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,130,246,0.15)",
        "glow-purple": "0 0 40px rgba(139,92,246,0.15)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.12)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "particle-drift": "particle-drift 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "particle-drift": {
          "0%": { transform: "translateY(100vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) translateX(40px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
