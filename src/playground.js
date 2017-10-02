import { hapi as playground } from 'graphql-playground/middleware'

export default {
  register: playground,
  options: {
    path: `/playground`,
    endpoint: `${ENV === `production` ? `/production` : ``}/graphql`
  }
}
