/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#6c757d",
        accent: "#17a2b8",
        dark: "#343a40",
        light: "#f8f9fa"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

