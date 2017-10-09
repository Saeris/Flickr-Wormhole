import { User } from "./user"

export const Person = new GqlObject({
  name: `Person`,
  description: `A tag referencing a User in a photo.`,
  fields: () => ({
    id: globalId(`Person`),
    person: {
      type: User,
      description: `The User tagged in the Photo.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ person: userId }, args, { user }) => user.load(userId)
    },
    addedBy: {
      type: User,
      description: `The User who tagged this Person in the Photo.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ addedBy: userId }, args, { user }) => user.load(userId)
    },
    x: {
      type: GqlInt,
      description: `The top left X coordinate of the bounding box highlighting the Person in the Photo. Optional.`
    },
    y: {
      type: GqlInt,
      description: `The top left y coordinate of the bounding box highlighting the Person in the Photo. Optional.`
    },
    width: {
      type: GqlInt,
      description: `The width of the bounding box highlighting the Person in the Photo. Optional.`
    },
    height: {
      type: GqlInt,
      description: `The height of the bounding box highlighting the Person in the Photo. Optional.`
    }
  })
})

export const Queries = {
}

export const Definition = Person

export default { Definition, Queries }
