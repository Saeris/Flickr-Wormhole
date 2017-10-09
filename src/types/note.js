import { Photo } from "./photo"
import { User } from "./user"

export const Note = new GqlObject({
  name: `Note`,
  description: `A Note placed on top of a Photo.`,
  fields: () => ({
    id: globalId(`Note`),
    noteId: {
      type: GqlID,
      description: `The Note's ID. Used for editing and deleting notes on photos.`
    },
    photo: {
      type: Photo,
      description: `The Photo this Note belongs to.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ photo: photoId }, args, { photo }) => photo.load(photoId)
    },
    author: {
      type: User,
      description: `The User who wrote this Note.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ author: userId }, args, { user }) => user.load(userId)
    },
    text: {
      type: GqlString,
      description: `The text of the Note.`
    },
    x: {
      type: GqlInt,
      description: `The top left X coordinate of the bounding box for this Note in the Photo.`
    },
    y: {
      type: GqlInt,
      description: `The top left y coordinate of the bounding box for this Note in the Photo.`
    },
    width: {
      type: GqlInt,
      description: `The width of the bounding box for this Note in the Photo.`
    },
    height: {
      type: GqlInt,
      description: `The height of the bounding box for this Note in the Photo.`
    }
  })
})

export const Queries = {
}

export const Definition = Note

export default { Definition, Queries }
