/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        purple: "#5429CC",
        pink: "#D81E5B",
        yellow: "#FFA219",
        green: "#33CC95",
        "text-black": "#000",
        "text-gray-900": "#081021",
        "text-gray-800": "#1E1E1E",
        "gray-750": "#242424",
        "text-gray-700": "#040136",
        "text-gray-600": "#4F4D72",
        "text-gray-500": "#64748B",
        "text-grat-400": "#AEABC1'",
        "text-gray-100": "#B4B3C3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
