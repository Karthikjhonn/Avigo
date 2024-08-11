/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        cocoa: {
          50: "#F28F85",
          100: "#F07E73",
          200: "#ED5C4E",
          300: "#E93A29",
          400: "#D32716",
          500: "#AE2012",
          600: "#7B170D",
          700: "#480D07",
          800: "#150402",
          900: "#000000",
          950: "#000000",
        },
        sand: {
          50: "#FDFBF7",
          100: "#FBF8EF",
          200: "#F6EFDA",
          300: "#F2E8CA",
          400: "#EEE1B9",
          500: "#E9D8A6",
          600: "#DABD68",
          700: "#C09C2F",
          800: "#7F671F",
          900: "#413510",
          950: "#211B08",
        },
      },
      fontFamily: {
        allura: ["Allura",], // Register your custom font
      },
    },
  },
  plugins: [],
};
