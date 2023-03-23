/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
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
