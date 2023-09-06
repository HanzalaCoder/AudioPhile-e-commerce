/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        all : [ 'Manrope', 'sans-serif'] 

    },
    extend: {
      colors : {
        darkorange : "#D87D4A",
        lightorange : "#FBAF85",
        customwhite : "#ffffff",
        customblack : "#000000",
        almostwhite : "#f1f1f1",
        almostBlack : "#191919",
        lightgray : "#d3d3d3",
        footerbg : "#101010",
        hovermain: "#4C4C4C",
        customtext: "rgba(0,0,0,0.5)",
        textlight: "rgba(255,255,255,0.5)",
        textplaceholder: "rgba(0,0,0,.4)",
      },
    },
  },
  plugins: [],
}

