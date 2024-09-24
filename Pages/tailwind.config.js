/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/html/**/*.html", // Scan all HTML files in components/html directory
    "./public/js/**/*.js", // Scan all JavaScript files in components/src directory
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
