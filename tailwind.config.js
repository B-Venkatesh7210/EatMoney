/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      mainBg: "#CAFFFF",
      bg1: "#22AFAF",
      bg2: "#3BF9F9",
      bgRed: "#921C1C",
      bgGreen: "#25AF3B",
      footerBg: "#008282"
    },
  },
  plugins: [],
};
