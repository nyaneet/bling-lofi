/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charleston: '#2C2C2E',
        antiflash: '#F2F2F7',
        platinum: '#E5E5E9',
        coralred: '#FF3B30',
      },
      boxShadow: {
        base: '0 8px 16px 0 rgba(42, 45, 47, 0.05)',
      },
    },
    fontFamily: {
      sfpro: ['SF-Pro', 'sans-serif'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
