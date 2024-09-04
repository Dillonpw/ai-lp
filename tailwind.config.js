/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ['"Press Start 2P"', 'system-ui'],
        inter: ['"Public Sans Variable"', 'sans-serif']
      }
    },
  },
  plugins: [],
}