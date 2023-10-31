/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light-shade': '#877b45',
        'light-accent': '#aa913d',
        'main-brand': '#2dd4bf',
        'dark-accent': '#7f3b43',
        'dark-shade': '#18313c',
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};
