const { exec } = require('child_process')
const path = require('path')

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })
  })
}

const postcssPath = path.resolve(__dirname, '../node_modules/.bin')

async function executeBaseCommands() {
  try {
    await runCommand(`${postcssPath}/postcss --config src/base src/base/*.css --base src --dir dist`)
    await runCommand('cat dist/base/*.css > dist/base.css')
    await runCommand(`${postcssPath}/prejss-cli dist/base.css --format commonjs`)
  } catch (error) {
    console.error('Error executing base commands:', error)
  }
}

async function executeUtilitiesGlobalCommands() {
  try {
    await runCommand(
      `${postcssPath}/postcss --config src/utilities/global src/utilities/global/*.css --base src --dir dist`
    )
    await runCommand('cat dist/utilities/global/*.css > dist/utilities.css')
    await runCommand(`${postcssPath}/prejss-cli dist/utilities.css --format commonjs`)
  } catch (error) {
    console.error('Error executing utilities global commands:', error)
  }
}

async function executeUtilitiesUnstyledCommands() {
  try {
    await runCommand(
      `${postcssPath}/postcss --config src/utilities/unstyled src/utilities/unstyled/*.css --base src --dir dist`,
      { stdio: [] }
    )
    await runCommand('cat dist/utilities/unstyled/*.css > dist/utilities-unstyled.css')
    await runCommand(`${postcssPath}/prejss-cli dist/utilities-unstyled.css --format commonjs`)
  } catch (error) {
    console.error('Error executing utilities unstyled commands:', error)
  }
}

async function executeUtilitiesStyledCommands() {
  try {
    await runCommand(
      `${postcssPath}/postcss --config src/utilities/styled src/utilities/styled/*.css --base src --dir dist`,
      { stdio: [] }
    )
    await runCommand('cat dist/utilities/styled/*.css > dist/utilities-styled.css')
    await runCommand(`${postcssPath}/prejss-cli dist/utilities-styled.css --format commonjs`)
  } catch (error) {
    console.error('Error executing utilities styled commands:', error)
  }
}

async function executeComponentsCommands() {
  try {
    await runCommand(`${postcssPath}/postcss --config src/components src/components/**/*.css --base src --dir dist`)
    await runCommand('cat dist/components/unstyled/*.css > dist/unstyled.css')
    await runCommand('cat dist/components/unstyled/*.css dist/components/styled/*.css > dist/styled.css')
    await runCommand(`${postcssPath}/prejss-cli dist/{unstyled,styled}.css --format commonjs`)
  } catch (error) {
    console.error('Error executing components commands:', error)
  }
}

async function executeVendorsCommands() {
  try {
    await runCommand(
      `${postcssPath}/postcss --config src/vendors/styled src/vendors/styled/*.css --base src --dir dist`,
      { stdio: [] }
    )
    await runCommand('cat dist/vendors/styled/*.css > dist/vendors-styled.css')
    await runCommand(`${postcssPath}/prejss-cli dist/vendors-styled.css --format commonjs`)
  } catch (error) {
    console.error('Error executing vendors styled commands:', error)
  }
}

async function executeThemeCommands() {
  try {
    await runCommand(`${postcssPath}/postcss src/themes/index.css -o dist/themes.css --config src/themes`, {
      stdio: []
    })
  } catch (error) {
    console.error('Error executing theme commands:', error)
  }
}

async function executeFullCommands() {
  try {
    if (!process.argv.includes('--skipfullcss')) {
      await runCommand(`${postcssPath}/postcss src/full/index.css -o dist/full.css --config src/full`)
    }
  } catch (error) {
    console.error('Error executing full commands:', error)
  }
}

async function executeCommands() {
  try {
    await executeBaseCommands()
    await executeUtilitiesGlobalCommands()
    await executeUtilitiesUnstyledCommands()
    await executeUtilitiesStyledCommands()
    await executeComponentsCommands()
    await executeVendorsCommands()
    await executeThemeCommands()
    await executeFullCommands()
  } catch (error) {
    console.error('Error executing commands:', error)
  }
}

// Check command-line arguments to determine which function to execute
const functionName = process.argv[2] ? process.argv[2] : 'executeCommands'

switch (functionName) {
  case 'executeBaseCommands':
    executeBaseCommands()
    break
  case 'executeUtilitiesGlobalCommands':
    executeUtilitiesGlobalCommands()
    break
  case 'executeUtilitiesUnstyledCommands':
    executeUtilitiesUnstyledCommands()
    break
  case 'executeUtilitiesStyledCommands':
    executeUtilitiesStyledCommands()
    break
  case 'executeComponentsCommands':
    executeComponentsCommands()
    break
  case 'executeVendorsCommands':
    executeVendorsCommands()
    break
  case 'executeThemeCommands':
    executeThemeCommands()
    break
  case 'executeFullCommands':
    executeFullCommands()
    break
  case 'executeCommands':
    executeCommands()
    break
  default:
    console.log(`Function '${functionName}' not found.`)
}
