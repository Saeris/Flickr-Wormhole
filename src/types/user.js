import {
  fetchUserGalleries,
  fetchUserAlbums,
  fetchUserFavorites,
  applyFilters,
  createFilter,
  createOrder,
  pagination,
  Range
} from "@/resolvers"
import { Photo, PhotoFilter, PhotoOrder } from "./photo"
import { Gallery, GalleryFilter, GalleryOrder } from "./gallery"
import { Album, AlbumFilter, AlbumOrder } from "./album"

export const User = new GqlObject({
  name: `User`,
  description: `A Flickr User.`,
  fields: disabled => ({
    id: globalId(`User`),
    userId: {
      type: GqlID,
      description: `The User's ID.`
    },
    username: {
      type: GqlString,
      description: `The User's Flickr username.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A username or a list of usernames.`
      }
    },
    fullname: {
      type: GqlString,
      description: `The User's full name.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A full name or a list of full names.`
      }
    },
    bio: {
      type: GqlString,
      description: `The User's bio string.`
    },
    location: {
      type: GqlString,
      description: `The User's location as shown in their profile.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A location name or a list of location names.`
      }
    },
    profile: {
      type: GqlURL,
      description: `URL to the User's profile page.`
    },
    views: {
      type: GqlInt,
      description: `The number of views the user's photos have received.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    photoCount: {
      type: GqlInt,
      description: `How many photos user has uploaded.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    photos: {
      type: !disabled && new GqlList(Photo),
      description: `A list of the User's photos.`,
      args: {
        first: { type: GqlInt },
        last: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        filter: { type: PhotoFilter },
        orderBy: { type: PhotoOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ userId, total: photoCount }, args, { flickr, photo }) =>
        applyFilters(await photo.loadMany(
          await fetchUserPhotos({ flickr, userId, ...pagination({...args, total}) })
        ), args)
    },
    galleries: {
      type: !disabled && new GqlList(Gallery),
      description: `A list of the User's galleries.`,
      args: {
        first: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        filter: { type: GalleryFilter },
        orderBy: { type: GalleryOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ userId }, args, { flickr, gallery }) =>
        applyFilters(await gallery.loadMany(await fetchUserGalleries({ flickr, userId, ...pagination(args) })), args)
    },
    albums: {
      type: !disabled && new GqlList(Album),
      description: `A list of the User's albums.`,
      args: {
        first: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        filter: { type: AlbumFilter },
        orderBy: { type: AlbumOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ userId }, args, { flickr, album }) =>
        applyFilters(await album.loadMany(await fetchUserAlbums({ flickr, userId, ...pagination(args) })), args)
    },
    favorites: {
      type: !disabled && new GqlList(Photo),
      description: `A list of Photos this User has favorited.`,
      args: {
        first: { type: GqlInt },
        count: { type: GqlInt },
        offset: { type: GqlInt },
        filter: { type: PhotoFilter },
        orderBy: { type: PhotoOrder }
      },
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: async({ userId}, args, { flickr, photo }) =>
        applyFilters(await photo.loadMany(await fetchUserFavorites({ flickr, userId, ...pagination(args) })), args)
    },
    isPro: {
      type: GqlBool,
      description: `Flag specifying whether the User is a professional user.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Filter by whether the User is a Pro user or not.`
      }
    },
    icon: {
      type: GqlURL,
      description: `A URL linking to the User's Buddy Icon.`
    },
    alias: {
      type: GqlString,
      description: `A string alias used in place of the User's ID in Flickr URLs.`
    }
  })
})

export const UserFilter = createFilter(User)
export const UserOrder = createOrder(User)

export const Queries = {
  user: {
    type: User,
    description: `Gets a User by their ID.`,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: `The ID of the User to fetch. (Required)`
      }
    },
    resolve: (parent, { id: userId }, { user }) => user.load(userId)
  },
  users: {
    type: new GqlList(User),
    description: `Gets a list of Users by their IDs.`,
    args: {
      id: {
        type: new GqlList(new GqlNonNull(GqlID)),
        description: `The IDs of the Users to fetch. (Required)`
      },
      filter: { type: UserFilter },
      orderBy: { type: UserOrder }
    },
    resolve: (parent, args, { user }) => applyFilters(user.loadMany(args.id), args)
  }
}

export const Definition = User

export default { Definition, Queries }
