/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#0390AF",
          100: "#0F1D2B",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
