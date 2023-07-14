/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'concert':['Concert One', 'cursive']
      }
    },
  },
  plugins: [],
}

