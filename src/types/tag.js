import { loadUser } from "./loaders"
import { fetchPhotoTags } from "./resolvers"
import { User } from "./user"

export const Tag = new GqlObject({
  name: `Tag`,
  description: `A Flickr Tag Object.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The Tag's ID.`
    },
    author: {
      type: User,
      description: `The User who created the Tag.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ author: userId }, args, { flickr }) => loadUser(flickr).load(userId)
    },
    text: {
      type: GqlString,
      description: `The Text of the Tag.`
    }
  })
})

export const Queries = {
  getPhotoTags: {
    type: Tag,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: `A Photo ID to fetch Tags for. (Required)`
      }
    },
    resolve: (parent, { id: photoId }, context) => fetchPhotoTags({ flickr, photoId })
  }
}

export const Definition = Tag

export default { Definition, Queries }
