import { graphiqlHapi } from "apollo-server-hapi"

export default {
  register: graphiqlHapi,
  options: {
    path: `/graphiql`,
    graphiqlOptions: {
      endpointURL: `${ENV === `production` ? `/production` : ``}/graphql`
    }
  }
}
