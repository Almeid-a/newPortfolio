/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'arvo': ['Arvo', 'sans-serif'],
        'open': ['Open-Sans', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': "bg-gradient-to-tl from-slate-900 via-purple-800 to-slate-900"
      },
      animation: {
        slideright: "slideright 3s ease forwards",
        slideleft: "slideleft 3s ease forwards",
        fall: "fall 3s ease forwards",
      },
      keyframes: {
        slideright: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          }
        },
        slideleft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          }
        },
        fall: {
          "0%": {
            transform: "translateY(-200px)",
          },
          "100%": {
            transform: "translateY(0)",
          }
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animatecss')
  ],
}