import hapi from "hapi"
//import memory from "catbox-memory"
import monitor from "./monitor" // Monitoring and Logging
//import limiter from "./limiter" // Rate Limiting
import api from "./api" // GraphQL API Endpoint
import graphiql from "./graphiql" // Graphiql Interface Endpoint
import playground from "./playground" // GraphQL Playground Interface Endpoint

const server = new hapi.Server({
  //cache: { engine: memory }
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
server.makeReady = function(onServerReady) {
  if (!loaded) {
    server.register(plugins, onServerReady)
    loaded = true
  } else {
    onServerReady(null)
  }
}

export default server
