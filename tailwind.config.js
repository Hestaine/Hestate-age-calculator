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
        dropdowncolor: "#645bac",
        lightBrand: "rgba(115, 96, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
