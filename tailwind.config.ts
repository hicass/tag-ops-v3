import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: 'rgb(var(--color-text) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      secondarylight: 'rgb(var(--color-secondary-light) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      accentlight: 'rgb(var(--color-accent-light) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
    }
  },
  plugins: [],
};
export default config;
