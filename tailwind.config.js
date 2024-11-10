/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main':'#171d2d' ,
      'card':'#24252b' ,
      'gray':'#8e8f91',
      'white' : '#e3e3e3'
    }
  },
  plugins: [],
}

