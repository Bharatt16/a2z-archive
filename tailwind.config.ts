import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d0d0f",
          panel: "#151517",
          card: "#1a1a1d",
          hover: "#212124",
        },
        border: {
          DEFAULT: "#2a2a2e",
        },
        brand: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        easy: "#22c55e",
        medium: "#f59e0b",
        hard: "#ef4444",
        removed: "#ef4444",
        merged: "#a855f7",
        renamed: "#3b82f6",
      },
      borderRadius: {
        xl: "0.85rem",
      },
    },
  },
  plugins: [],
};
export default config;
