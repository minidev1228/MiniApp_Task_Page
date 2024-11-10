/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'yellow':'#fcda3f' ,
      'white' : "#ffffff",
      'black' : "black",
      'main' : '#010f20',
      'side' : "#02203e",
      'orange' : "#d5aa71"
    }
  },
  plugins: [],
}

