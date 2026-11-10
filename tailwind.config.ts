import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#fecddc',
          300: '#fda4c0',
          400: '#fb719a',
          500: '#f43f7a',
          600: '#e11d62',
          700: '#be1250',
          800: '#9e1245',
          900: '#84133e',
          950: '#4c0520',
        },
        rosebud: {
          50: '#fff5f7',
          100: '#ffebf0',
          200: '#fdd6e1',
          300: '#fbb4c7',
          400: '#f783a3',
          500: '#ee557f',
          600: '#db3163',
        },
        cream: '#fffdfa',
        parchment: '#fefbf6',
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        serif: [
          '"Playfair Display"',
          '"Georgia"',
          '"Cambria"',
          '"Times New Roman"',
          "serif",
        ],
        handwriting: [
          '"Caveat"',
          '"Dancing Script"',
          '"Segoe Script"',
          '"Brush Script MT"',
          "cursive",
        ],
      },
      boxShadow: {
        'soft-glow': '0 0 40px -10px rgba(244, 63, 122, 0.25)',
        'card-lift': '0 20px 45px -15px rgba(244, 63, 122, 0.18), 0 0 1px rgba(244, 63, 122, 0.3)',
        'envelope': '0 25px 50px -12px rgba(225, 29, 98, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.7) inset',
        'polaroid': '0 15px 35px -10px rgba(225, 29, 98, 0.18), 0 2px 6px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '15%': { transform: 'rotate(-4deg) scale(1.02)' },
          '30%': { transform: 'rotate(4deg) scale(1.03)' },
          '45%': { transform: 'rotate(-3deg) scale(1.04)' },
          '60%': { transform: 'rotate(3deg) scale(1.04)' },
          '75%': { transform: 'rotate(-1deg) scale(1.02)' },
          '90%': { transform: 'rotate(1deg) scale(1.01)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-1.5deg)' },
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.95' },
        },
      },
      animation: {
        shake: 'shake 0.75s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        float: 'float 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 4.5s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
