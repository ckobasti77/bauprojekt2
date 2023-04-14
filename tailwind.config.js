/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2EA295',
        secondary: '#e0e0e0',
        third: '#252525',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
