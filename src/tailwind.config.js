/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Core brand palette — Oliphant Safaris
        savanna: {
          DEFAULT: "#1E3B2C", // deep safari/forest green — primary
          light: "#2C5641",
          dark: "#12261C",
        },
        sand: {
          DEFAULT: "#EDE3CE", // warm sand — section backgrounds
          light: "#F5EFE2",
        },
        cream: "#FBF8F2", // base page background
        ochre: {
          DEFAULT: "#B4622A", // burnt ochre — primary accent / CTAs
          dark: "#8F4C1F",
        },
        gold: "#C9A24B", // muted gold — sparing highlight use
        charcoal: "#26241F", // primary text
        stone: "#6B6455", // secondary/muted text
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "page-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wobble: {
          "0%, 92%, 100%": { transform: "rotate(0deg) scale(1)" },
          "93%": { transform: "rotate(-14deg) scale(1.08)" },
          "95%": { transform: "rotate(11deg) scale(1.08)" },
          "97%": { transform: "rotate(-7deg) scale(1.04)" },
          "99%": { transform: "rotate(4deg) scale(1.02)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.7s ease-out forwards",
        "page-in": "page-in 300ms ease-out",
        wobble: "wobble 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};