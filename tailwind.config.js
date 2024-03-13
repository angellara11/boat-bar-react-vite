/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111",
        darkGrey: "#2d2e34",
        lightGrey: "#353841",
        white: "#ffffff",
        orange: "#e88535",
      },
    },
  },
  plugins: [],
};
