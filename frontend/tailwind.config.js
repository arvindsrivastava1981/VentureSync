/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b132b',
        emerald: '#10b981',
        gold: '#f59e0b',
        rose: '#ef4444',
        sky: '#06b6d4',
        teal: '#14b8a6',
      },
    },
  },
  plugins: [],
}