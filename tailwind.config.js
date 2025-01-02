/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        websiteBgGray: '#f7f7f7',
        grayText: '#09080F99',
        categoryBg: '#09080F0D',
        primary: '#9538E2'
      },
    },
  },
  plugins: [require('daisyui')],
}
