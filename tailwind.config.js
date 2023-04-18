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
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1920px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
