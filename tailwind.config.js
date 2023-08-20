/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
  ],
  safelist: [
    "hover:border-blue-300",
    "hover:border-green-500",
    "hover:border-red-500"
  ]
}