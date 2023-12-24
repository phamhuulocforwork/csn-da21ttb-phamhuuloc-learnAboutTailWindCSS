/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}', './*{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('../../public/background.svg')",
        'background-pattern-dark': "url('../../public/backgroundDark.svg')",
      },
      colors: {
        primary: {
          50: '#f0f7fe',
          100: '#deecfb',
          200: '#c4e0f9',
          300: '#9cccf4',
          400: '#6dafed',
          500: '#4b90e6',
          600: '#3674da',
          700: '#2d60c8',
          800: '#2a4fa3',
          900: '#274481',
          950: '#0f172a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
