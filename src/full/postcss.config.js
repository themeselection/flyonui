module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')('./src/full/tailwind.config.js'),
    require('autoprefixer')({
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR']
    })
  ]
}
