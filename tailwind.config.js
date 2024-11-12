import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif",
      },
      opacity: {
        0: "0",
        100: "1",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
