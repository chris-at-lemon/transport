/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      transportLight: ["TransportNew-Light", "sans-serif"],
      transportMedium: ["TransportNew-Medium", "sans-serif"],
      transportHeavy: ["TransportNew-Heavy", "sans-serif"],
    },
    backgroundPosition: {
      top: "top",
      "top-4": "center top -10rem",
    },
    backgroundSize: {
      100: "100%",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://cdn.carsvansandbikes.com/image/upload/f_auto/media/documents/bg_lg.png')",
        "header-pattern": "url('https://cdn.carsvansandbikes.com/image/upload/f_auto/media/documents/bg-Header-content.png')",
      },
      lineHeight: {
        12: "4rem",
      },
    },
  },
  plugins: [],
};
