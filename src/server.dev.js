import chalk from 'chalk'

import app from './app'

// Start the Express server.
startServer()

function startServer() {
  const PORT = process.env.API_PORT || 8080
  const HOST_NAME = process.env.HOST_NAME || '0.0.0.0'

  const httpServer = app.listen(PORT, error => {
    console.clear()
    if (error) {
      console.error(error)
    } else {
      const address = httpServer.address()
      console.info(
        `${chalk.green('==>')} 🌎 Listening on ${chalk.magenta(address.port)}.`,
      )
      console.info(
        `\nOpen up ${chalk.red(
          `http://${HOST_NAME}:${address.port}/`,
        )} in your browser.`,
      )
    }
  })

  // Hot Module Replacement API
  if (module.hot) {
    // Hot reload of `app` and related modules.
    let currentApp = app
    module.hot.accept('./app', () => {
      httpServer.removeListener('request', currentApp)
      import('./app')
        .then(m => {
          httpServer.on('request', m.default)
          currentApp = m.default
          console.log('Server reloaded!')
        })
        .catch(err => console.error(err))
    })

    // Hot reload of entry module (self). It will be restart http-server.
    module.hot.accept()
    module.hot.dispose(() => {
      console.log('Disposing entry module...')
      httpServer.close()
    })
  }
}
