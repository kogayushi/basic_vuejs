const bodyParser = require('body-parser')

module.export = app => {
  app.use(bodyParser.json())
}
