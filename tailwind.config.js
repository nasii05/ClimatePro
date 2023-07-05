/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'marker':['Permanent Marker', 'cursive']
      }
    },
  },
  plugins: [],
}

