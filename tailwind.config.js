/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  daisyui: {
    themes: true, // You can still use DaisyUI themes
    darkTheme: "light", // Set the dark mode theme to "light" to prevent dark mode
  },
};
