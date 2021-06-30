module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#1E1E1E",
      white: "#FDFAFD",
      purple: "#A353C8",
      red: "#F73718 ",
      ground: "#DDBB55",
      normal: "#AAAA99",
      fire: "#FF4422",
      water: "#3399FF",
      electric: "#FFCC33",
      grass: "#77CC55",
      ice: "#66CCFF",
      fighting: "#BB5544",
      poison: "#AA5599",
      flying: "#8899FF",
      psychic: "#FF5599",
      bug: "#AABB22",
      rock: "#BBAA66",
      ghost: "#6969BC",
      dragon: "#7766EE",
      dark: "#775544",
      steel: "#AAAABB",
      fairy: "#EE99EE",
    },
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
