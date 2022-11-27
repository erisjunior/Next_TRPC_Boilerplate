/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#ff0000'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
}
