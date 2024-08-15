import app from './app.js'
import { config } from './config.js'

const Main = async () => {
  app.listen(config.server.port, config.server.ip)
  console.log('Server is listening on port', config.server.port)
}

Main()
