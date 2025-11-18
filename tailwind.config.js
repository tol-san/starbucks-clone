/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: "#1e3932",
          green: "#008248",
          mint: "#d4e9e2",
          lightMint: "#f1f8f6",
          cream: "#f3f1e7",
          black: "#000000",

        },
      },
      fontFamily: {
        sodo: ["'SoDo Sans'", "sans-serif"],
      }
    },
  },
  plugins: [],
}

