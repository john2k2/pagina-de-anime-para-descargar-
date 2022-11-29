const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-orange": "#F68913",
        "dark-blue": "#212529",
        "light-blue": "#141619", //opacity 0.9
      },
    },
  },
  plugins: [],
};
