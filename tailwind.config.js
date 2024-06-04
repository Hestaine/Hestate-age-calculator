/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "300px",
      md: "750px",
      lg: "1024px",
    },
    extend: {
      colors: {
        opaqeBlack: "rgba(0, 0, 0, 0.7)",
        buttonColor: "#deeeff",
      },
      boxShadow: {
        upward: "0px -10px 20px #645bac",
      },
      borderRadius: {
        borderLeft: "0px 20px 20px 0",
      },
    },
  },
  plugins: [],
};
