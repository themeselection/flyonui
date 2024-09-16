module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')('./src/vendors/tailwind.config.js')
  ]
}
