/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      dark:'#252525',
      pdark:'#00140E',
      primary:'#80FFDB',
      pprimary:'#99ffe2',
      secondary:'#00EFAB',
      tertiary:'#6930C3',
      white:'#fff',
    },
    extend: {},
  },
  plugins: [],
}

