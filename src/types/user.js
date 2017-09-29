import {
  fetchUserByID,
  fetchUserPhotos,
  fetchUserGalleries,
  fetchUserAlbums,
  fetchUserFavorites,
  fetchPhotoByID
} from "./resolvers"
import { Photo } from "./photo"
import { Gallery } from "./gallery"
import { Album } from "./album"

export const User = new GqlObject({
  name: `User`,
  description: `A Flickr User.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The User's ID.`
    },
    username: {
      type: GqlString,
      description: `The User's Flickr username.`
    },
    fullname: {
      type: GqlString,
      description: `The User's full name.`
    },
    bio: {
      type: GqlString,
      description: `The User's bio string.`
    },
    location: {
      type: GqlString,
      description: `The User's location as shown in their profile.`
    },
    profile: {
      type: GqlURL,
      description: `URL to the User's profile page.`
    },
    photos: {
      type: new GqlList(Photo),
      description: `A list of the User's photos.`,
      resolve: type => fetchUserPhotos(type.id)
    },
    galleries: {
      type: new GqlList(Gallery),
      description: `A list of the User's galleries.`,
      resolve: type => fetchUserGalleries(type.id)
    },
    albums: {
      type: new GqlList(Album),
      description: `A list of the User's albums.`,
      resolve: type => fetchUserAlbums(type.id)
    },
    favorites: {
      type: new GqlList(Photo),
      description: `A list of Photos this User has favorited.`,
      resolve: async type => await fetchUserFavorites(type.id)
        .then(results => results.map(res => fetchPhotoByID(res.id)))
    },
    isPro: {
      type: GqlBool,
      description: `Flag specifying whether the User is a professional user.`
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

export const Queries = {
  getUserByID: {
    type: User,
    args: {
      id: { type: new GqlNonNull(GqlID) }
    },
    resolve: (parent, args, context) => fetchUserByID(args.id)
  }
}

export const Definition = User

export default { Definition, Queries }
