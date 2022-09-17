/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      transportLight: ["TransportNew-Light", "sans-serif"],
      transportMedium: ["TransportNew-Medium", "sans-serif"],
      transportHeavy: ["TransportNew-Heavy", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
