/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#F8F4EB",
        "gary-50":"#EFE6E6",
        "gray-100":"#DFCCCC",
        "gary-500":"#5e0000",
        "primary-100":"#FFE1E0",
        "primary-300":"#FFA6A3",
        "primary-500":"#FF6B66",
        "secondary-400":"#FFCD58",
        "secondary-500":"#FFC132",
      },
      backgroundImage:(theme)=>({
        "gradient-yellowred":'linear-gradiant(90deg,#FF616A 0%,#FFC837 100%)',
        "mobile-home":"url('./assets/HomePageGraphic.png')"
      }),
      fontFamily:{
        dmsans:["DM Sans","sans-serif"],
        montserrat:["Montserrat","sans-serif"]
      },
      content:{
        evolvetext:"url('./assets/EvolveText.png')",
        abstarctwaves:"url('./assets/AbstarctWaves.png')",
        sparkles:"url('./assets/Sparkles.png')",
        circles:"url('./assets/Circles.png')",
      }

    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px",
    }
  },
  plugins: [],
}