import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export const tailwind = {
  darkMode: ["class", "(prefers-color-scheme: dark)"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ... your theme here
    },
  },
  plugins: [animate],
} satisfies Config;

export default tailwind;
