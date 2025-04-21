module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Azeret Mono"],
        // serif: ["Azeret Mono"],
        // mono: ["Azeret Mono"],
        azeret: ["Azeret Mono"],
        rs: ["Rethink Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
