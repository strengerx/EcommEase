/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mont": `"Montserrat", sans-serif;`,
        "jost": `"Jost", sans-serif;`
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "1/4": "1fr 4fr"
      },
    },
  },
  plugins: [],
}

