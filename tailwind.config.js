/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      mainBg: "#CAFFFF",
      bg1: "#0A4A57",
      bg2: "#00CFCF",
      bgRed: "#921C1C",
      bgGreen: "#25AF3B",
      footerBg: "#008282",
      text1: "#caffff",
      text2: "#000000",
      bgLight: "#caffff",
      disabled: "#494949",
      bronze: "#8d472f",
      silver: "#b2b2b2",
      gold: "#c1ac03",
      emerald: "#04651f"
    },
  },
  plugins: [],
};
