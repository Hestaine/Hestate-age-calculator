/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "300px",
      md: "780px",
      lg: "1024px",
    },
    extend: {
      colors: {
        brandColor: "rgba(115, 96, 255)",
        opaqeBlack: "rgba(0, 0, 0, 0.7)",
        dropdowncolor: "#645bac",
        buttonColor: "#deeeff",
      },
      boxShadow: {
        upward: "0px -10px 20px #645bac",
      },
    },
  },
  plugins: [],
};
