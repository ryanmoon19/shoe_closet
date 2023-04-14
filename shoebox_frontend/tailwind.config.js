/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid' : 'repeat(auto-fill, minmax(240px, 1fr))'
      }
    },
  },
  plugins: [],
}

