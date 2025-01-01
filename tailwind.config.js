/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('/assets/images/img.png')",
      },
    },
  },
  plugins: [],
}
