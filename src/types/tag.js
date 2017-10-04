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
      resolve: ({ author: userId }, args, { user }) => user.load(userId)
    },
    text: {
      type: GqlString,
      description: `The Text of the Tag.`
    }
  })
})

export const Queries = {
}

export const Definition = Tag

export default { Definition, Queries }
