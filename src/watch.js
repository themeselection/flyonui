const chokidar = require('chokidar')
const pc = require('picocolors')
const { exec } = require('child_process')

// Function to execute your build command
function build(functionName = 'executeCommands') {
  const startTime = Date.now()
  exec('node src/build.js ' + functionName, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    } else {
      const endTime = Date.now()
      console.log(
        pc.cyan(functionName + ' ') + pc.yellow(`⏰ Time taken: ${((endTime - startTime) / 1000).toFixed(2)} seconds`)
      )
    }
  })
}

// // ! Watch all files (take more time)
// chokidar.watch('src/**/*').on('change', () => {
//   build()
// })

// Watch for specific folder changes
chokidar.watch('src/base/**/*').on('change', () => {
  build('executeBaseCommands')
})
chokidar.watch('src/utilities/global/**/*').on('change', () => {
  build('executeUtilitiesGlobalCommands')
})
chokidar.watch('src/utilities/styled/**/*').on('change', () => {
  build('executeUtilitiesStyledCommands')
})
chokidar.watch('src/utilities/unstyled/**/*').on('change', () => {
  build('executeUtilitiesUnstyledCommands')
})
chokidar.watch('src/components/**/*').on('change', () => {
  build('executeComponentsCommands')
})
chokidar.watch('src/themes/**/*').on('change', () => {
  build('executeThemeCommands')
})
chokidar.watch('src/full/**/*').on('change', () => {
  build('executeFullCommands')
})
