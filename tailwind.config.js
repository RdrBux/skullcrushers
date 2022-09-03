/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        naranja: '#e57a00',
      },
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
};
