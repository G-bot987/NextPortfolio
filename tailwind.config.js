/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
        fontFamily: {
            'tektur': ['"Tektur"', 'cursive'],
            'bd-retrocentric': ['bd-retrocentric']
          },

      },
      screens: {
        'st': '601px',
        'sd': '1456px',
        ...defaultTheme.screens,
      },
    },
  plugins: [],
};
