import type { Config } from 'tailwindcss';

const config = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'card-bg': '#f3f3f3',
        'dark-light': '#6e6f78',
      }
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
  },
  plugins: [],
} satisfies Config;

export default config;
