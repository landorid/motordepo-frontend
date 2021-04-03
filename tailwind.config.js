const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      grey: colors.blueGray,
      red: colors.red,
      white: colors.white,
      green: colors.green,
    },
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "980px",
        xl: "980px",
      },
    },
  },
  variants: {
    extend: {},
    container: [],
  },
  plugins: [],
};
