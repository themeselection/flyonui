const plugin = require('tailwindcss/plugin')
const responsiveRegex = require('../lib/responsiveRegex')
const utilityClasses = require('../lib/utility-classes')

module.exports = {
  content: [{ raw: '<input class="theme-controller" checked/>', extension: 'html' }],
  safelist: responsiveRegex,
  theme: {
    colors: require('../theming'),
    ...require('../lib/utility-classes'),
    extend: {
      ...utilityClasses
    }
  },
  corePlugins: [
    'animation',
    'backgroundColor',
    'backgroundImage',
    'borderColor',
    'borderRadius',
    'divideColor',
    'gradientColorStops',
    'outlineColor',
    'placeholderColor',
    'preflight',
    'ringColor',
    'ringOffsetColor',
    'ringOffsetWidth',
    'ringWidth',
    'textColor',
    'transitionProperty',
    'stroke'
  ],
  plugins: [
    require('../../plugin'),
    plugin(({ addBase, addUtilities, addComponents, matchUtilities, theme }) => {
      addBase(require('../../dist/base'))
      addComponents(require('../../dist/styled'))
      addComponents(require('../../dist/vendors-styled'))
      addUtilities(require('../../dist/utilities'), {
        variants: ['responsive']
      })
      addUtilities(require('../../dist/utilities-unstyled'), {
        variants: ['responsive']
      })
      addUtilities(require('../../dist/utilities-styled'), {
        variants: ['responsive']
      })
    })
  ]
}
