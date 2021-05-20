// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      animation: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
