import { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(green-code|cyber-luxury|minimalist-future)-(primary|background|secondary|accent|text)/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'green-code': {
          primary: '#00FF00',
          background: '#000000',
          secondary: '#1A1A1A',
          accent: '#A9A9A9',
          text: 'rgba(255, 255, 255, 0.85)',
        },
        'cyber-luxury': {
          primary: '#50C878',
          background: '#121212',
          secondary: '#C0C0C0',
          accent: '#FFD700',
          text: '#00BFFF',
        },
        'minimalist-future': {
          primary: '#101010',
          background: '#2F4F4F',
          secondary: '#36454F',
          accent: '#B0C4DE',
          text: '#F8F8FF',
        },
      },
      fontFamily: {
        title: ['Orbitron', 'Rajdhani', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif'],
        description: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [forms],
};

export default config;
