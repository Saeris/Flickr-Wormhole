import { graphqlHapi } from 'apollo-server-hapi'
import { formatError } from './utilities'
import { schema } from "./schema"

export default {
  register: graphqlHapi, options: {
    path: `/`,
    graphqlOptions: request => ({
      formatError : formatError,
      schema:       schema,
      root_value:   schema,
      debug:        true
    }),
    route : {
      cors : true
    }
  }
}
