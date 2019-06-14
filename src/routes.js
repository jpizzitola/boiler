export function createRoutes(app) {
  // Sample "Hello, world!" endpoint to verify the API is working.
  app.get('/', (req, res) =>
    res.send({
      message: 'Home page!',
    }),
  )

  // Sample "Hello, world!" endpoint to verify the API is working.
  app.get('/helloworld', (req, res) =>
    res.send({
      message: 'Hello, world!',
    }),
  )

 app.get()
}
