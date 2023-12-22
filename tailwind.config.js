/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}', './*{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('../../public/background.svg')",
      },
      colors: {
        primary: {
          50: '#f0f5fe',
          100: '#dde7fc',
          200: '#c3d5fa',
          300: '#99bbf7',
          400: '#6998f1',
          500: '#4674eb',
          600: '#3559e0',
          700: '#2842cd',
          800: '#2738a6',
          900: '#243384',
          950: '#1b2250',
        },
      },
    },
  },
  plugins: [],
}
