/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#7250ee",
      secondaryDark: "#1f183e",
      secondarySemiDark: "#251c4c",
      secondaryLight: "#463a6c",
      darkPurple: "#e55bea",
      grayColor: "#8b86a1",
      skyBlueColor: "#73ace1",
      greenColor: "#3CB371",
      brightGreen: "#00FF00",
      dangerColor: "#FF0000",
      violetColor: "#73d7e1",
      snow: "#F5F5F5",
      dark: "#000",
      darkSnow: "#e9eedf",
      loading: "rgba(0,0,0,0.5)",
    },
    extend: {
      gridRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
