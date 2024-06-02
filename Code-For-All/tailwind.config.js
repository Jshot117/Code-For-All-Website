/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgba(53,35,103,255)'

        ,
      },
    },
  },
  plugins: [],
}
