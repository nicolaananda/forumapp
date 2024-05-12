/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}", // Matches files in the src directory and any subdirectories
    // Matches files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
