import path from 'path'

/**
 * Load the environment configuration before importing our other modules
 * so that the evaluated variables are included.
 *
 * Link: https://12factor.net/config
 *
 * @export
 * @returns
 */
export function initializeEnv() {
  const result = require('dotenv').config({
    path:
      process.env.NODE_ENV === 'production'
        ? path.resolve(process.cwd(), '.env.production')
        : path.resolve(process.cwd(), '.env.development'),
  })

  // Throw an error if it exists.
  if (result.error) throw result.error

  return result
}
