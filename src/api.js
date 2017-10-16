import { graphqlHapi } from "apollo-server-hapi" // https://github.com/apollographql/apollo-server
// https://www.howtographql.com/advanced/4-security/
import depthLimit from 'graphql-depth-limit' // https://github.com/stems/graphql-depth-limit
import queryComplexity from "graphql-query-complexity" // https://github.com/ivome/graphql-query-complexity
import * as loaders from "@/loaders"
import { formatError } from "@/utilities"
import { schema } from "./schema"
import { Flickr } from "./flickr"

// GraphQL Caching Examples:
// http://dev.apollodata.com/tools/graphql-tools/connectors.html#DataLoader-and-caching
// https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/index.js#L67-L73
// https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/sql/schema.js#L63
// https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/github/connector.js

export default {
  register: graphqlHapi,
  options: {
    path: `/graphql`,
    graphqlOptions: request => {
      const flickr = new Flickr(FLICKR_API_KEY)
      return {
        schema,
        context: {
          flickr,
          album: loaders.loadAlbum(flickr),
          albumPhotos: loaders.loadAlbumPhotos(flickr),
          brands: loaders.loadBrands(),
          cameras: loaders.loadCamerasByBrand(),
          photo: loaders.loadPhoto(flickr),
          images: loaders.loadImages(flickr),
          licenses: loaders.loadLicenses(),
          user: loaders.loadUser(flickr),
          userAlbums: loaders.loadUserAlbums(flickr),
          userPhotos: loaders.loadUserPhotos(flickr)
        },
        root_value: schema,
        formatError,
        validationRules: [
          depthLimit(4),
          queryComplexity({
            maximumComplexity: 2000,
            variables: {},
            onComplete: complexity => { info(`Determined query complexity: ${complexity}`) },
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
