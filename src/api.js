import { graphqlHapi } from "apollo-server-hapi"
import depthLimit from 'graphql-depth-limit'
import queryComplexity from "graphql-query-complexity"
import { formatError } from "./utilities"
import { schema } from "./schema"
import { Flickr } from "./flickr"

export default {
  register: graphqlHapi,
  options: {
    path: `/graphql`,
    graphqlOptions: (request) => {
      const flickr = new Flickr(FLICKR_API_KEY)
      return {
        schema: schema,
        context: {
          flickr
        },
        root_value: schema,
        formatError: formatError,
        validationRules: [
          depthLimit(4),
          queryComplexity({
            maximumComplexity: 2000,
            variables: {},
            onComplete: (complexity) => { info(`Determined query complexity: ${complexity}`) },
            createError: (max, actual) =>
              new GqlError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`)
          })
        ],
        tracing: true,
        debug: true
      }
    },
    route: {
      cors: true
    }
  }
}
