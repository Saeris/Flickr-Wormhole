import hapi from "hapi" // https://hapijs.com/
// https://github.com/hapijs/catbox
//import memory from "catbox-memory" // https://github.com/hapijs/catbox-memory
import monitor from "./monitor" // Monitoring and Logging
//import limiter from "./limiter" // Rate Limiting
import api from "./api" // GraphQL API Endpoint
import graphiql from "./graphiql" // Graphiql Interface Endpoint
import playground from "./playground" // GraphQL Playground Interface Endpoint

const server = new hapi.Server({
  //cache: { engine: memory } // https://hapijs.com/tutorials/caching
})
server.connection({ routes: { cors: true } })

const plugins = [
  //limiter,
  monitor,
  api,
  graphiql,
  playground
]

let loaded = false
server.makeReady = (onServerReady) => {
  if (!loaded) {
    server.register(plugins, onServerReady)
    loaded = true
  }
  onServerReady(null)
}

export default server
