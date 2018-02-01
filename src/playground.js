import hapiPlayground from "graphql-playground-middleware-hapi"

export default {
  plugin: hapiPlayground,
  options: {
    path: `/playground`,
    endpoint: `/graphql`
  }
}
