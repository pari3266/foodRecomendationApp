/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        color1: '#007A3B',
        color2: '#0AFF81',
        color3: '#5CFFAC',
        color4: '#85FFBA',
        color5: '#D6FFEA',
      },
    },
  },
  plugins: [],
}

