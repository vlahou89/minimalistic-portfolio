module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        p1: "rgb(0, 140, 114)",
        p2: "#203A4C",
        p3: "#33323D",
        s1: "#FAFAFA",
        s2: "#EAEAEB",
        s3: "#F43030",
        t1: "#979797",
        t2: "#e6e6e7",
        white: "#fafafa",
      },
      fontFamily: {
        sans: [
          '"Public Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: ['"Ibarra Real Nova"', "serif"],
      },

      padding: {
        11: "3.5rem",
        7: "1.75rem",
        full: "100%",
        half: "50%",
        r92: "92%",
        footer: "23rem",
      },
      margin: {
        11: "3.5rem",
        7: "1.75rem",
      },
      letterSpacing: {
        2: "2px",
      },
      fontSize: {
        40: "2.5rem",
        50: "3.125rem",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(0, 140, 114,0.5)",
      },

      width: {
        90: "90%",
        80: "80%",
        70: "70%",
        60: "60%",
        half: "50%",
        40: "40%",
        30: "30%",
        20: "20%",
        10: "10%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
