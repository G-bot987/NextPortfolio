/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'tektur': ['"Tektur"', 'cursive'],
      'bd-retrocentric': ['bd-retrocentric']
    },},
  },
  plugins: [],
};
