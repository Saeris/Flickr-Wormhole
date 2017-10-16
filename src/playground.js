import { hapi as playground } from "graphql-playground/middleware" // https://github.com/graphcool/graphql-playground#as-hapi-middleware

export default {
  register: playground,
  options: {
    path: `/playground`,
    endpoint: `${ENV === `production` ? `/production` : ``}/graphql`
  }
}
