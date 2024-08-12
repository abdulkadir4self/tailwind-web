/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      fontFamily: {
        'robot': [ '"Roboto" , san-serif']
      }
     
    }


  },
  plugins: [],
}

