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
      },
      animation: {
        'fadeIn': "fade-in 1s ease-in"
      },
      keyframes: {
        "fade-in": {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        }
      }
    },
  },
  plugins: [],
}
