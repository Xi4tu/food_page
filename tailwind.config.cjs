/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#682978",
        secondary: "#8E048C",
        dimPink: "#A12E9F",
        dimBlue: "#4557B8",
        shineblue: "#1DA99E"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'mine': '0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px',
      }
    },
    screens: {
      xs: "350px",
      ss: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};