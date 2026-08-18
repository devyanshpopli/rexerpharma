import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
  ink: "#10294F",
  "ink-soft": "#3E5570",
  paper: "#FFFFFF",
  "paper-dim": "#EEF3F8",
  teal: "#1C77C3",
  "teal-deep": "#0F4D8A",
  amber: "#3FA0E8",
  rust: "#123A66",
},
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
