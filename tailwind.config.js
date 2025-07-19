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
              
     primary:"#FF790C",
     secondary:"#0F172A",
    
      
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
