module.exports = {
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      colors: {
        gray: "#162937",
        blue: "#789587",
        red: "#cc5142",
        pink: "#e3c1b0",
        yellow: "#ebb01d",
        beige: "#E9D7BF",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#cc5142",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};

module.exports = {
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-children"),
  ],
};

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {},
  variants: {},
  plugins: [],
};
