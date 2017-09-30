import hapi from "hapi"
import monitor from "./monitor" // Monitoring and Logging
import api from "./api" // GraphQL API Endpoint
import graphiql from "./graphiql" // Graphiql Interface Endpoint

const server = new hapi.Server()
server.connection({ routes: { cors: true } })

const plugins = [monitor, api, graphiql]

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
