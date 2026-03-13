/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Critical: This enables the theme switching logic
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          brand: '#6366f1',
        },
      },
    },
    plugins: [],
  }