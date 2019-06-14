// tells our app to require handlebars express functionality
import exphbs from 'express-handlebars'

export function setViewEngine(app) {
  // View engine setup
  const hbs = exphbs.create({
    // config
  })

  app.engine('handlebars', hbs.engine)
  app.set('view engine', 'handlebars')
}
