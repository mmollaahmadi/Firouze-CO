/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      DarkBlue: "hsl(209, 23%, 22%)", //(Dark Mode Elements)
      VeryDarkBlue: "hsl(207, 26%, 17%)", // (Dark Mode Background)
      SuperDarkBlue: "hsl(200, 15%, 8%)", // (Light Mode Text)
      DarkGray: "hsl(0, 0%, 52%)", // (Light Mode Input)
      VeryLightGray: "hsl(0, 0%, 98%)", // (Light Mode Background)
      White: "hsl(0, 0%, 100%)", // (Dark Mode Text & Light Mode Elements)
    },
  },
  plugins: [],
};
