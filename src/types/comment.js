import {
  fetchGalleryByID,
  createFilter,
  createOrder,
  DateRange
} from "@/resolvers"
import { User } from "./user"
import { Photo } from "./photo"
import { Album } from "./album"
import { Gallery } from "./gallery"

export const Comment = new GqlObject({
  name: `Comment`,
  description: `A Flickr Comment Object.`,
  fields: () => ({
    id: globalId(`Comment`),
    commentId: {
      type: GqlID,
      description: `The Comment's ID.`
    },
    author: {
      type: User,
      description: `The User who wrote the Comment.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ author: userId }, args, { user }) => user.load(userId)
    },
    photo: {
      type: Photo,
      description: `The Photo this Comment was left on. (If it is a Photo Comment)`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ photo: photoId }, args, { photo }) => photo.load(photoId)
    },
    album: {
      type: Album,
      description: `The Album this Comment was left on. (If it is a Album Comment)`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ album: photosetId }, args, { album }) => album(photosetId)
    },
    gallery: {
      type: Gallery,
      description: `The Gallery this Comment was left on. (If it is a Gallery Comment)`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ gallery: galleryId }, args, { flickr }) => fetchGalleryByID({ flickr, galleryId })
    },
    created: {
      type: GqlDateTime,
      description: `The date and time the Comment was created.`,
      sortable: true,
      filter: {
        type: DateRange,
        description: `A date to filter against, or a start and an end date.`
      }
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

export const CommentFilter = createFilter(Comment)
export const CommentOrder = createOrder(Comment)

export const Queries = {
}

export const Definition = Comment

export default { Definition, Queries }
