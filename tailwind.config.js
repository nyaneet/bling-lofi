/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charleston: '#2C2C2E',
        antiflash: '#F2F2F7',
        coralred: '#FF3B30',
      },
    },
    fontFamily: {
      sfpro: ['SF-Pro', 'sans-serif'],
    },
  },
  plugins: [],
};
