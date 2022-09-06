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
        },
      },
      color: {
        "sky-50": "#ecfeff",
        "sky-100": "#cffafe",
        "sky-200": "#bae6fd",
        "sky-300": "#7dd3fc",
        "sky-400": "#38bdf8",
        "sky-500": "#0ea5e9" ,
        "cyan-50": "#ecfeff"
      }
    },
  },
  plugins: [],
}
