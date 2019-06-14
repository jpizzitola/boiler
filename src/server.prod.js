import app from '@/app'

// Start the Express server.
startServer()

function startServer() {
  const PORT = process.env.API_PORT || 8080
  const HOST_NAME = process.env.HOST_NAME

  const httpServer = app.listen(PORT, HOST_NAME, error => {
    console.clear()

    if (error) {
      console.error(error)
    } else {
      const address = httpServer.address()
      console.info(
        `==> 🌎 Listening on ${address.port}. Open up http://${HOST_NAME}:${
          address.port
        }/ in your browser.`,
      )
    }
  })
}
