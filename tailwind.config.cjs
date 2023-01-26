/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Cuprum", "Roboto"],
      serif: ["Dancing Script", "Lora"],
    },
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.10)" },
        },
      },
    },
    animation: {
      "scale-picture": "scale 4s linear forwards ",
    },
  },

  plugins: [],
};
