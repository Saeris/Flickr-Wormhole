import {
  fetchAlbumPhotos,
  fetchAlbumComments,
  fetchAlbumByID,
  applyFilters,
  filters,
  order,
  pagination,
  Range
} from "@/resolvers"
import { User } from "./user"
import { Photo, PhotoFilter, PhotoOrder } from "./photo"
import {
  Comment,
  //CommentFilter,
  CommentOrder
} from "./comment"

export const Album = new GqlObject({
  name: `Album`,
  description: `A Flickr Album (Photoset) Object.`,
  fields: disabled => ({
    id: globalId(`Album`),
    albumId: {
      type: new GqlNonNull(GqlID),
      description: `The album's ID.`
    },
    title: {
      type: GqlString,
      description: `The name of this album.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An Album title or a list of Album titles.`
      }
    },
    description: {
      type: GqlString,
      description: `A description of the album.`
    },
    owner: {
      type: !disabled && new GqlNonNull(User),
      description: `The User who is the owner of this album.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ owner: userId }, args, { user }) => user.load(userId)
    },
    slug: {
      type: GqlString,
      description: `A string generated from the Album's title, used as a URL slug to filter a list of Albums by name.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An Album slug or a list of Album slugs.`
      }
    },
    primary: {
      type: Photo,
      description: `The primary Photo of this album, used as a thumbnail and banner image.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ primary: photoId }, args, { photo }) => photo.load(photoId)
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
      description: `A list of Photos belonging to this Album.`,
      args: {
        first: { type: GqlInt },
        last: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        filter: { type: PhotoFilter },
        orderBy: { type: PhotoOrder }
      },
      complexity: ({ count }, childComplexity) => childComplexity * count,
      resolve: async({ owner: userId, albumId: photosetId, photoCount, videoCount }, args, { flickr, photo }) =>
        applyFilters(await photo.loadMany(
          await fetchAlbumPhotos({
            flickr,
            userId,
            photosetId,
            ...pagination({ ...args, total: photoCount + videoCount })
          })
        ), args)
    },
    comments: {
      type: !disabled && new GqlList(Comment),
      description: `A list of Comments left on this Album.`,
      args: {
        first: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        //filter: { type: CommentFilter },
        orderBy: { type: CommentOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ albumId: photosetId }, args, { flickr }) =>
        applyFilters(await fetchAlbumComments({ flickr, photosetId, ...pagination(args) }), args)
    },
    created: {
      type: new GqlNonNull(GqlDateTime),
      description: `The date and time when this album was created.`,
      sortable: true
    },
    updated: {
      type: new GqlNonNull(GqlDateTime),
      description: `The last date and time that this album was updated.`,
      sortable: true
    }
  })
})

export const AlbumFilter = filters(Album)
export const AlbumOrder = order(Album)

export const Queries = {
  album: {
    type: Album,
    description: `Gets the specified Album for the given User. Use the 'albums' query to get a list of Albums belonging to a particular User.`,
    args: {
      user: {
        type: new GqlNonNull(GqlID),
        description: `The ID of the User who owns this Album. (Required)`
      },
      album: {
        type: new GqlNonNull(GqlID),
        description: `The ID of the Album to fetch. (Required)`
      }
    },
    resolve: (parent, { user: userId, album: photosetId }, { flickr }) => fetchAlbumByID({ flickr, userId, photosetId })
  }
}

export const Definition = Album

export default { Definition, Queries }
