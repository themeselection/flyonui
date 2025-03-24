const fs = require('fs')

const pluginsDir = './src/js/plugins'
const helpersDir = './src/js/helpers'
const distDir = './dist'
const excludePlugins = ['base-plugin']

const outputConfig = { noBanner: true }

const config = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.json'
  },
  entries: [
    {
      filePath: './src/js/index.ts',
      outFile: './dist/index.d.ts',
      output: outputConfig
    },
    ...fs
      .readdirSync(pluginsDir)
      .map(pluginName => writeFile(pluginsDir, pluginName))
      .filter(Boolean),
    ...fs
      .readdirSync(helpersDir)
      .map(pluginName => writeFile(helpersDir, pluginName, 'helper-'))
      .filter(Boolean)
  ]
}

function writeFile(dir, plugin, prefix = '') {
  if (!fs.lstatSync(`${dir}/${plugin}`).isDirectory() || excludePlugins.includes(plugin)) {
    return null
  }

  return {
    filePath: `${dir}/${plugin}/index.ts`,
    outFile: `${distDir}/${prefix}${plugin}.d.ts`,
    output: outputConfig
  }
}

module.exports = config
