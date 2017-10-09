import {
  fetchPhotoExif,
  fetchPhotoLocation,
  fetchPlaceByID,
  fetchPhotoComments,
  fetchPeopleInPhoto,
  applyFilters,
  filters,
  order,
  pagination,
  Range
} from "@/resolvers"
import { License } from "./license"
import { User } from "./user"
import { Exif } from "./exif"
import { Place } from "./place"
import { Note } from "./note"
import { Comment, CommentOrder } from "./comment"
import { Person } from "./person"
import { Tag } from "./tag"
import { Image, ImageFilter, ImageOrder } from "./image"

export const Photo = new GqlObject({
  name: `Photo`,
  description: `A Flickr Photo Object.`,
  fields: disabled => ({
    id: globalId(`Photo`),
    photoId: {
      type: GqlID,
      description: `The Photo's ID`
    },
    secret: {
      type: GqlID,
      description: `The Photo's Secret, used in conjunction with the Photo's ID to bypass permissions checking.`
    },
    server: {
      type: GqlID,
      description: `The ID of the server on which the Photo resides. Used to construct photo source URLs.`
    },
    license: {
      type: License,
      description: `The License the Photo was released under.`,
      sortable: true,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ license }, args, { licenses }) => await licenses.load(`licenses`)
        .then(results => results.filter(({ id }) => id === license)[0]) || null
    },
    owner: {
      type: User,
      description: `The User who owns this Photo.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ owner: userId }, args, { user }) => user.load(userId)
    },
    title: {
      type: GqlString,
      description: `The title of the Photo.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A Photo title or a list of Photo titles.`
      }
    },
    caption: {
      type: GqlString,
      description: `The caption of the Photo.`
    },
    exif: {
      type: Exif,
      description: `The EXIF Data of the Photo.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ photoId }, args, { flickr }) => fetchPhotoExif({ flickr, photoId })
    },
    views: {
      type: GqlInt,
      description: `The number of views the Photo has received.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    format: {
      type: GqlString,
      description: `The Image format of the Photo.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An image format or a list of image formats.`
      }
    },
    media: {
      type: GqlString,
      description: `The media type of the photo. (Photo or Video)`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A media type or a list of media types.`
      }
    },
    favorite: {
      type: GqlBool,
      description: `Flag determining whether the current User has favorited this Photo.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Filter by whether the photo has been favorited by the current user or not.`
      }
    },
    isPublic: {
      type: GqlBool,
      description: `Flag determining whether the Photo is viewable publicly.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Filter by whether the photo is publicly viewable or not.`
      }
    },
    friends: {
      type: GqlBool,
      description: `Flag determining whether the Photo is viewable by friends of the Owner.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Filter by whether the photo is viewable by friends or not.`
      }
    },
    family: {
      type: GqlBool,
      description: `Flag determining whether the Photo is viewable by family of the Owner.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Filter by whether the photo is viewable by family or not.`
      }
    },
    posted: {
      type: GqlDateTime,
      description: `Date and time on which the Photo was first uploaded.`,
      sortable: true
    },
    taken: {
      type: GqlDateTime,
      description: `Date and time on which the Photo was taken.`,
      sortable: true
    },
    updated: {
      type: GqlDateTime,
      description: `Date and time on which the photo was last updated.`,
      sortable: true
    },
    location: {
      type: Place,
      description: `The Place where the Photo was taken.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ photoId, hasLocation }, args, { flickr }) => !!hasLocation
        ? await fetchPhotoLocation({ flickr, photoId })
          .then(placeId => !!placeId ? fetchPlaceByID(({ flickr, placeId })) : null)
        : null
    },
    notes: {
      type: !disabled && new GqlList(Note),
      description: `A List of Notes left on this Photo.`
    },
    commentsCount: {
      type: GqlInt,
      description: `How many comments have been left on this Photo.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    comments: {
      type: !disabled && new GqlList(Comment),
      description: `A list of Comments left on this Photo.`,
      args: {
        first: { type: GqlInt },
        last: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        orderBy: { type: CommentOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ photoId, total: commentsCount }, args, { flickr }) =>
        !!total
          ? applyFilters(await fetchPhotoComments({ flickr, photoId, ...pagination({ ...args, total }) }), args)
          : []
    },
    people: {
      type: !disabled && new GqlList(Person),
      description: `A list of People who are tagged in this photo.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ photoId, hasPeople }, args, { flickr }) =>
        await !!hasPeople ? fetchPeopleInPhoto({ flickr, photoId }) : []
    },
    tags: {
      type: !disabled && new GqlList(Tag),
      description: `A list of Tags this Photo has been tagged with.`
    },
    images: {
      type: !disabled && new GqlList(Image),
      description: `A list of Image URLs for this Photo.`,
      args: {
        filter: { type: ImageFilter },
        orderBy: { type: ImageOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ photoId }, args, { images }) => applyFilters(await images.load(photoId), args)
    }
  })
})

export const PhotoOrder = order(Photo)
export const PhotoFilter = filters(Photo)

export const Queries = {
  photo: {
    type: Photo,
    description: `Gets a Photo by it's ID.`,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: `The ID of the Photo to fetch. (Required)`
      }
    },
    resolve: (parent, { id: photoId }, { photo }) => photo.load(photoId)
  },
  photos: {
    type: new GqlList(Photo),
    description: `Gets a list of Photos by their IDs.`,
    args: {
      id: {
        type: new GqlList(new GqlNonNull(GqlID)),
        description: `The IDs of the Photos to fetch. (Required)`
      },
      filter: { type: PhotoFilter },
      orderBy: { type: PhotoOrder }
    },
    resolve: (parent, args, { photo }) => applyFilters(photo.loadMany(args.id), args)
  }
}

export const Definition = Photo

export default { Definition, Queries }
