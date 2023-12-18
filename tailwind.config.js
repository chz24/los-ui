module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}