import { fetchUserByID } from "./resolvers"
import { User } from "./user"

export const Comment = new GqlObject({
  name: `Comment`,
  description: `A Flickr Comment Object.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The Comment's ID.`
    },
    author: {
      type: User,
      description: `The User who wrote the Comment.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ author: userId }, args, { flickr }) => fetchUserByID({ flickr, userId })
    },
    created: {
      type: GqlDateTime,
      description: `The date and time the Comment was created.`
    },
    url: {
      type: GqlURL,
      description: `A URL linking to the Comment.`
    },
    text: {
      type: GqlString,
      description: `The text of the Comment.`
    }
  })
})

export const Queries = {
}

export const Definition = Comment

export default { Definition, Queries }
