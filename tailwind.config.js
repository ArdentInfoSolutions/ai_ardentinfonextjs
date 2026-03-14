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
        keyframes: {
          scan: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(200%)' },
          },
        },
        animation: {
          scan: 'scan 3s linear infinite',
        },
      },
    },
    plugins: [],
  }

  