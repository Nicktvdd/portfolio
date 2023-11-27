/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light-shade': '#6BB77B',
        'light-accent': '#6BB77B',
        'main-brand': '#D76F30',
        'dark-accent': 'black',
        'dark-shade': '#172D13',
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};
