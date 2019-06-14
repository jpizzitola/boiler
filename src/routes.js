import stockdata from 'stock-data.js'

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

  // API tokens
  const apiStockToken = process.env.STOCK_TOKEN

  app.get('/api/*', (req, res, next) => {
    // TODO: Implement a promise.
    stockdata
      .realtime({
        symbols: 'AAPL',
        API_TOKEN: apiStockToken,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(`Could not get this data due to error: ${error}`)
      })

    next()
  })
}
