/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adatta al tuo progetto (React/Vite)
  ],
  theme: {
    extend: {
      keyframes: {
        focusIn: {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        focusIn: "focusIn 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both",
      },
    },
  },
};
