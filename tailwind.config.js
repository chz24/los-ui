module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}