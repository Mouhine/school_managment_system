/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        move:"#1e1b4b",
        statGreen :"#36BA98"
    }
    },
     
  },
  plugins: [],
}