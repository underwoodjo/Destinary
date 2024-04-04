import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfyregular: ['Satisfy', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundOpacity: {
        active: '',
      },
    },
  },
  plugins: [],
};

export default config;
