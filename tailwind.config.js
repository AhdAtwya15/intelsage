/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roobert: ["Roobert PRO", "sans-serif"],
      },
      colors: {
        lightBg: "#ffffff",
        darkBg: "#172235", 
        lightText: "#303030", 
        darkText: "#E0E0E0", 
        cardLight: "#FFFFFF", 
        cardDark: "#1E293B",
        borderDark: "#334155", 
        screenBg:"#141B2D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
