/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" },
      },
      width: {
        112: "30rem",
        144: "32rem",
        160: "33rem",
        176: "34rem",
        192: "35rem",
        208: "36rem",
        224: "37rem",
        240: "38rem",
        304: "42rem",
        336: "44rem",
        352: "45rem",
        400: "48rem",
        1312: "82rem",
      },
      height: {
        112: "30rem",
        128: "31rem",
        144: "32rem",
        160: "33rem",
        176: "34rem",
        192: "35rem",
        208: "36rem",
        224: "37rem",
        240: "38rem",
        304: "42rem",
        336: "44rem",
        352: "45rem",
        400: "48rem",
        1312: "82rem",
      },
    },
    fontFamily: {
      body: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
