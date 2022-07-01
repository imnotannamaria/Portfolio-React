/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        purple: {
          100: '#201F2C',
          200: '#8F89DA',
          300: '#564CAE',
          400: '#4135A5',
          450: '#242232',
          600: '#141222',
          700: '#211F2E',
          800: '#0F0E17',
        },
        gray: {
          400: '#171F26',
          600: '#0C151D',
        },
        yellow: {
          400: '#FFDE59',
        },
        white: {
          100: '#F1F2F4'
        }
      },
    },
  },
  plugins: [],
}
