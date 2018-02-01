import hapi from "hapi" // https://hapijs.com/
// https://github.com/hapijs/catbox
//import memory from "catbox-memory" // https://github.com/hapijs/catbox-memory
import monitor from "./monitor" // Monitoring and Logging
//import limiter from "./limiter" // Rate Limiting
import playground from "./playground" // GraphQL Playground Route
import api from "./api" // GraphQL API Endpoint

const server = new hapi.Server({
  host: `localhost`,
  port: PORT,
  routes: { cors: true }
})

const plugins = [
  //limiter,
  monitor,
  api
]

async function setup() {
  info(`Setting up server...`)
  try {
    if (LOCAL) plugins.push(playground)
    await server.register(plugins)
    info(`Successfully setup server!`)
    if (LOCAL) {
      await server.start()
      info(`Server running at: ${server.info.uri}`)
    }
  } catch (err) {
    error(`Failed to setup server:`, err)
  }
}

let loaded = !module.parent

if (loaded) setup()

export default server
