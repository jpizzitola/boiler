import express from 'express'
import path from 'path'
// Middleware for parsing HTTP request bodies
import bodyParser from 'body-parser'
// Read cookies
// @see https://www.npmjs.com/package/cookie-parser
import cookieParser from 'cookie-parser'
// Our logger will be morgan, this is only the require statement, not the use statement.
// @see https://github.com/expressjs/morgan
import logger from 'morgan'
// This allows cross origin requests
import cors from 'cors'

export function configureMiddlewares(app) {
  if (process.env.NODE_ENV === 'production') {
    // express installed default- need to research
    app.use(express.static(path.join(__dirname, 'public')))
  }

  // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  // NOTE: may not be proper use.
  // @see https://www.npmjs.com/package/cors
  // @see https://www.codementor.io/nodejsappdeveloper/how-to-add-cors-functionality-to-your-nodejs-web-app-ed4eu7ltf
  app.use(cors({ credentials: true, origin: true }))

  // Our logger will be morgan, morgan has many logger 'modes'.
  // @see https://github.com/expressjs/morgan
  app.use(logger('dev'))

  // JSON support
  app.use(express.json())

  // express installed default- need to research
  app.use(express.urlencoded({ extended: false }))

  // express installed default....ability to read cookies
  // @see https://www.npmjs.com/package/cookie-parser
  app.use(cookieParser())

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
}
