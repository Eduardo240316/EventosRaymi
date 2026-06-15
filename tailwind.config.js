/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b2e',
          900: '#0a1424',
          800: '#0d1b2e',
          700: '#13243d',
          600: '#1b3050',
        },
        gold: {
          DEFAULT: '#d4a017',
          light: '#e0b13a',
          dark: '#b8860b',
        },
        cream: '#f7f4ee',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
