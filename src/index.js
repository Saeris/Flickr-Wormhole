import lambdaPlayground from 'graphql-playground-middleware-lambda'
import server from "./server"

exports.server = async (event, context, response) => {
  const { path, queryStringParameters: params, httpMethod: method, body: payload, headers: reqHeaders } = event

  let url = path
  if (params) {
    const qs = Object.keys(params).map(key => `${key}=${params[key]}`)
    if (qs.length > 0) url = `${url}?${qs.join(`&`)}`
  }

  const { statusCode, headers, result: body } = await server.inject({
    method,
    url,
    payload,
    headers: reqHeaders,
    validate: false
  })

  delete headers[`content-encoding`]
  delete headers[`transfer-encoding`]
  response(null, { statusCode, headers, body })
}

exports.playground = lambdaPlayground({
  endpoint: `/graphql`
})
