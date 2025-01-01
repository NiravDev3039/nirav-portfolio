/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // All JavaScript/TypeScript files in src
    "./src/*.{js,jsx,ts,tsx}",     // Root files in src
    "./index.html"                 // Root HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5', // Indigo
          DEFAULT: '#4338CA',
          dark: '#3730A3',
        },
        secondary: {
          light: '#10B981', // Emerald
          DEFAULT: '#059669',
          dark: '#047857',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}