module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#292929",
        darkish: "#131313",
        grayish: "#A5A5A5",
        selectcolor: "#232323",
        
      },
      spacing: {
        HeadFont: "410px",
        cardwidth: "256px",
        cardH :"224",
        15:"15rem",
        25: "20rem",
        26: "58rem",
        50: "60rem",
        53: "53rem",
        55: "55rem",
        60: "60rem",
        100: "25rem",
        
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
