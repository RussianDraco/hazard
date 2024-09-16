/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "1338px",
        sm: "1119px",
        xs: "600px",
        normal: "1920px"
      }
    },
  },
  plugins: [],
}