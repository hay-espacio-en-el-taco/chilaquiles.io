const 
  app = require('./src/app'),
  config = require('./config/config')

app.start(
  config.port || 1337,
  config.path || 'graphql'
)