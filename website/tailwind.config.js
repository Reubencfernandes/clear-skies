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
      },
      backgroundImage:{
        'air':"url('./Images/airquality.png')",
        'hm':"url('./Images/home.jpg')"
      },
      colors:{
        'lb':"#1E1E1E",
        'location':"rgba(217, 217, 217, 0.53)"
      }
    },
  },
  plugins: [],
}

