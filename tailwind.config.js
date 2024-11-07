/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'italy':"url('./assets/fundoitaly.png')",
       'fundo':"url('./assets/fundo.png')",
      }
    },
    colors: {
      'white': '#FFFFFF',
      'blue-200': '#3c416c' ,
      'blue-300': '#1e2245',
      'blue-400': '#1f2346',
      'red-300': '#AE715F',
      'red-500': '#ff0404'

    }
  },
  plugins: [],
}

