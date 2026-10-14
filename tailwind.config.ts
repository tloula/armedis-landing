import type { Config } from "tailwindcss";

// Theme colors live in CSS variables; color-mix lets opacity modifiers like `bg-primary/20` work with them.
const themeColor = (name: string) =>
  `color-mix(in srgb, var(--${name}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: themeColor("background"),
        foreground: themeColor("foreground"),
        primary: themeColor("primary"),
        secondary: themeColor("secondary"),

        "primary-accent": themeColor("primary-accent"),
        "foreground-accent": themeColor("foreground-accent"),
        "hero-background": themeColor("hero-background"),
        surface: themeColor("surface"),
        "primary-soft": themeColor("primary-soft"),
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
