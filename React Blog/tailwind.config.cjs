/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily:{'nunito': ['Edu NSW ACT Foundation', 'cursive'],'body':['Edu NSW ACT Foundation','cursive']},
    screens:{
      'xs':'350px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    mytheme: {
      "primary": "#1e40af",
      "secondary": "#9be3f2",
      "accent": "#d6be0e",
      "neutral": "#1f2937",
      "base-100": "#374151",
      "info": "#8CCDE8",
      "success": "#16a34a",
      "warning": "#C36C09",
      "error": "#EE203C",
               },
  },
  plugins: [require("daisyui")],
}
