/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('/public/background.svg')",
      },
    },
  },
  plugins: [],
};
