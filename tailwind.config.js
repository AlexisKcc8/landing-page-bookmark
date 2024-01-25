/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#5366e0", // Cambia a un tono más claro si lo deseas
          darker: "#242946", // Cambia a un tono más oscuro si lo deseas
          // Puedes agregar más variantes de azul según tus necesidades
        },
      },
    },
  },

  plugins: [],
};
