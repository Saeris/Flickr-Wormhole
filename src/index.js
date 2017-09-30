import server from "./server"

exports.handler = (event, context, callback) => { // eslint-disable-line
  server.makeReady((err) => { //eslint-disable-line
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
