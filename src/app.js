import express from 'express'

import { initializeEnv } from './initialize-env'
import { configureMiddlewares } from './configuration'
// This uses `babel-plugin-module-resolver`
import { createRoutes } from '@/routes'

// Make `env` variables available before anything happens.
initializeEnv()

// This defines our 'app' as an express server app
const app = express()

// Middlewares
configureMiddlewares(app)

// Routing
createRoutes(app)

export default app
