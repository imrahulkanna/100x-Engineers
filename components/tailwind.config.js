/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        chirp: ["Chirp"],
      },
      fontSize: {
        "2.5xl": "26px",
      },
      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "blue-wash": "rgba(117, 190, 239, 0.2)",
        "stroke": "rgba(29, 155, 240, 0.24)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        success: "#00BE74",
        error: "#8B141A",
        "twitter-neutral": {
          50: "#F9F9F9",
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#D3D3D3",
          400: "#A2A2A2",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
          1000: "#000000",
        },
      },
      spacing: {
        1.5: "6px",
        2.5: "10px",
        97.5: "390px",
        88: "334px",
        26: "100px",
        155.5: "155.5px",
        136: "136.129px",
        145: "145.238px",
        366: "366.817",
      },
      lineHeight: {
        normal: "normal",
      },
      borderRadius: {
        "signup-radius": "65px",
        twitter: "30px",
      },
      boxShadow: {
        signup: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        "xl-1": "23.668209075927734px",
      },
    },
  },
  plugins: [],
};