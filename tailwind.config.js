/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "1440px" },
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
