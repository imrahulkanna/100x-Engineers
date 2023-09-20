/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrant: ["Montserrat", "sans-serif"],
        dm: ["DM Mono", "sans-serif"],
        mooli: ["Mooli", "sans-serif"],
        ubuntu: ['Ubuntu']
      },
      fontSize: {
        "2lg": "1.225rem",
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  plugins: [],
};

