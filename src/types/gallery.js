import { filters, order, Range } from "@/resolvers"
import { User } from "./user"
import { Photo, PhotoOrder } from "./photo"
import { Comment } from "./comment"

export const Gallery = new GqlObject({
  name: `Gallery`,
  description: `A Flickr Gallery Object.`,
  fields: disabled => ({
    id: globalId(`Gallery`),
    galleryId: {
      type: GqlID,
      description: `The Gallery's ID.`
    },
    title: {
      type: GqlString,
      description: `The name of this Gallery.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A gallery title or a list of gallery titles.`
      }
    },
    description: {
      type: GqlString,
      description: `A description of the Gallery.`
    },
    owner: {
      type: User,
      description: `The User who is the owner of this Gallery.`
    },
    primary: {
      type: Photo,
      description: `The primary Photo of this Gallery, used as a thumbnail and banner image.`
    },
    url: {
      type: GqlURL,
      description: `A URL linking to the Gallery on Flickr.`
    },
    photoCount: {
      type: GqlInt,
      description: `How many photos are in this album.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    videoCount: {
      type: GqlInt,
      description: `How many videos are in this album.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    commentCount: {
      type: GqlInt,
      description: `How many comments this album has.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    views: {
      type: GqlInt,
      description: `How many views this album has.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    photos: {
      type: !disabled && new GqlList(Photo),
      description: `A list of Photos belonging to this Gallery.`,
      args: {
        first: { type: GqlInt, defaultValue: 0 },
        last : { type: GqlInt, defaultValue: 0 },
        count: { type: GqlInt, defaultValue: 500 },
        offset: { type: GqlInt, defaultValue: 0 },
        orderBy: { type: PhotoOrder }
      }
    },
    comments: {
      type: !disabled && new GqlList(Comment),
      description: `A list of Comments left on this Album.`
    },
    created: {
      type: GqlDateTime,
      description: `The date and time when this Gallery was created.`,
      sortable: true
    },
    updated: {
      type: GqlDateTime,
      description: `The last date and time that this Gallery was updated.`,
      sortable: true
    }
  })
})

export const GalleryFilter = filters(Gallery)
export const GalleryOrder = order(Gallery)

export const Queries = {
}

export const Definition = Gallery

export default { Definition, Queries }
