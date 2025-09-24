/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'bg-primary',
    'text-primary'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BA4C01'
      }
    }
  },
  plugins: [],
}

