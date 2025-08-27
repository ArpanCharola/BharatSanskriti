/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#193B51",
        secondary: "#4D55CC",
        accent: "#F4B400"
      }
    }
  },
  plugins: []
};
