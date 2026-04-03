import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#030f0f",
          surface: "#03624c",
          accent: "#00df82",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 223, 130, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 223, 130, 0.04) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 223, 130, 0.15)" },
          "100%": { boxShadow: "0 0 32px rgba(0, 223, 130, 0.28)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
