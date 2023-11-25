/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('/public/background.svg')",
      },
    },
  },
  plugins: [],
}
