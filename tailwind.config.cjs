/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx, ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../src/images/icon-bg.jpg')",
     },
      fontFamily: {
        ubuntu: "Ubuntu, sans-serif",
      },
      colors: {
        verde: "#7FB069",
        laranja: "#F7934C",
        laranjaDark: "#CC5803",
        cinza: "#B3B3B3",
        cinzaClaro: "#F3F6F2",
      }
    },
  },
  plugins: [],
};
