/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
  },
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      "bg-dark": "#0E1729",
      "border-dark": "#212F42",
      "border-dark-h": "#334a69",
      "card-dark": "#121C31",
      "card-text-dark": "#63868D",
      "text-dark": "#7E92B1",
      "gray-light": "#222f43",
      tag: "#122f42",
      "blue-light": "#1fb6ff",
      cyan: "#03c9d5",
      transparent: "transparent",
    },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
    },
    fontSize: {
      vsm: "13px",
      vsm2: "11px",
      "14px": "14px",
      md: "16px",
      lg: "20px",
    },
    extend: {
      screen: {},
      spacing: {
        0: "0",
        0.3: "0.3rem",
        0.5: "0.5rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
      keyframes: {
        display: {
          "0%": {
            transform: "translateY(100px)",
            visibility: "hidden",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            visibility: "visible",
            opacity: 1,
          },
        },
        showSearchInput: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        visible: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        closeSearchInput: {
          "0%": {
            transform: "translateX(0%)",
            opacity: 1,
            visibility: "hidden",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: 0,
            visibility: "hidden",
          },
        },
      },
      animation: {
        showSearchInput: "showSearchInput 0.5s",
        closeSearchInput: "closeSearchInput 0s forwards",
        visible: "visible 0.2s forwards",
        display: "display 0.3s forwards",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
