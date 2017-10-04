import { graphiqlHapi } from "apollo-server-hapi" // http://dev.apollodata.com/tools/apollo-server/graphiql.html#graphiqlHapi

// Info on AWS Custom Domain Setup:
// https://serverless.com/blog/serverless-api-gateway-domain/?rd=true
// http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html

export default {
  register: graphiqlHapi,
  options: {
    path: `/graphiql`,
    graphiqlOptions: {
      // AWS will prefix all routes with the stage identifier,
      // so this field will need to be modified on deploy if not
      // using a custom domain.
      // eg: https://<api-id>.execute-api.<region>.amazonaws.com/<stage>/<route>
      endpointURL: `/graphql`
    }
  }
}
