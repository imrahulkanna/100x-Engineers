/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        signup: ["Inter var", "Montserrat"],
        chirp: ["Chirp"],
      },
      fontSize: {
        "2.5xl": "26px",
      },
      colors: {
        "twitter-neutral-50": "#F9F9F9",
        "twitter-blue": "#1D9BF0",
        "border-color": "rgba(29, 155, 240, 0.24)",
      },
      spacing: {
        97.5: "390px",
        88: "334px",
        26: "100px",
        155.5: "155.5px",
        136: "136.129px",
        145: "145.238px",
        366: "366.817"
      },
      borderRadius: {
        "signup-radius": "65px",
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

