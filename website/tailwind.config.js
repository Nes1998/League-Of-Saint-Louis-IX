/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        canterbury: ["Canterbury", "regular"],
        medieval: ["Medieval Sharp", "regular"]
      }
    },
  },
  plugins: [],
}
