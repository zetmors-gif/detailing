/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}", // Добавьте те расширения, которые используете
  ],
  theme: {
    extend: {
      fontFamily: {
        alumni: ['"Alumni Sans"', 'sans-serif'],
      },
      colors: {
        gold: {
          light: '#D4AF37',
          DEFAULT: '#AF8C13',
          dark: '#8C6F0D',
          500: '#AF8C13',
          600: '#8C6F0D',
        },
        dark: '#0A0A0A',
      }
    }
  },
  plugins: [],
}
