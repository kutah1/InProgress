/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#fb923c', // preserve orange-400
        },
              
     primary:"#ffc001",
     secondary:"#ff9c01",
    
        amber: {
          500: '#f59e42', // preserve amber-500
        },
        gray: {
          800: '#1f2937', // preserve gray-800
        },
      },
         container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm: "3rem"
        }
        
      }
    },
  },
  plugins: [],
}
