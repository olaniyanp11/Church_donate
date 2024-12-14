/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#606135",
        secondary: "#E8E0CD",
        accent: "#04344F"
      }
    },
  },
  plugins: [],
}