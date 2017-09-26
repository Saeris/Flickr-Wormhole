'use strict' // eslint-disable-line strict
import hapi from "hapi"
import good from "./good"
import api from "./api"
import graphiql from "./graphiql"

const server = new hapi.Server()
server.connection({routes: { cors: true}})

const plugins = [
  good,
  api,
  graphiql
]

exports.handler = (event, context, callback) => { // eslint-disable-line
  server.register(plugins, (err) => { //eslint-disable-line
    if (err) throw err

    let path = event.path
    if (event.queryStringParameters) {
      const qs = Object.keys(event.queryStringParameters).map(key => key + `=` + event.queryStringParameters[key])
      if (qs.length > 0) path += `?` + qs.join(`&`)
    }
    const options = {
      method: event.httpMethod,
      url: path,
      payload: event.body,
      headers: event.headers,
      validate: false
    }

    server.inject(options, function(res){ // eslint-disable-line
      delete res.headers[`content-encoding`]
      delete res.headers[`transfer-encoding`]

      const response = {
        statusCode: res.statusCode,
        headers: res.headers,
        body: res.result
      }
      callback(null, response) // eslint-disable-line
    })
  })
}
