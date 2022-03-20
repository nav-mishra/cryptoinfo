module.exports = {
  darkMode: "class",
  content: ["./node_modules/flowbite/**/*.js",
  './pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('flowbite/plugin')],
}