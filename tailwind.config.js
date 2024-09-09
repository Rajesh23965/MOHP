/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "340px",
      sm: "530px",
      md: "750px",

      lg: "1024px",
    },
    colors: {
      lightgray: "#f5f3f0",
      blue: "#2b49be",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#44e1f2",
      "gray-dark": "#273444",
      gray: "#d3d3d3",
      graylight: "#f7f9fc",

      red: "#fa0505",
      volvet: "#d39d9d",
      back: "#020202",
      white: "#ffffff",
      yellow: "#f2d544",
      indigo: "#923bd2",
      Header: "#d6db32",
      lightblack: "#494a4d",
      pink: "#f2cecb",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      textUnderlineOffset: {
        3: "3px",
        10: "10px",
        12: "12px",
      },
    },
  },
  variants: {},
  plugins: [],
};
