/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'head':['Sacramento'],
      'body':['poppins'],
      'bebas':['Bebas Neue']
    },
    extend: {
      spacing:{
        '500':'31.2rem'
      }
    },
  },
  plugins: [],
}

