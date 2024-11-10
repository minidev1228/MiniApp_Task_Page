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
      'card':'#212736' ,
      'card-p':'#a8a9ab',
      'img' :'#2f3136',
      'blue':'#3a8ef0',
      'gray':'#8e8f91',
      'white' : '#e3e3e3'
    }
  },
  plugins: [],
}

