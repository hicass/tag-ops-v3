import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.105rem',
      lg: '1.25rem',
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.75rem',
    },
  },
  plugins: [],
};
export default config;
