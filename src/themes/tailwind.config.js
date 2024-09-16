module.exports = {
  content: [{ raw: '<input class="theme-controller" checked/>', extension: 'html' }],
  experimental: {
    optimizeUniversalDefaults: true
  },
  corePlugins: {
    preflight: false
  },
  flyonui: {
    base: false,
    themes: true
  },
  plugins: [require('../index')]
}
