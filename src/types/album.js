import { fetchAlbumPhotos, fetchAlbumComments, fetchAlbumByID } from "@/resolvers"
import { User } from "./user"
import { Photo } from "./photo"
import { Comment } from "./comment"

export const Album = new GqlObject({
  name: `Album`,
  description: `A Flickr Album (Photoset) Object.`,
  fields: () => ({
    id: {
      type: new GqlNonNull(GqlID),
      description: `The album's ID.`
    },
    title: {
      type: GqlString,
      description: `The name of this album.`
    },
    description: {
      type: GqlString,
      description: `A description of the album.`
    },
    owner: {
      type: new GqlNonNull(User),
      description: `The User who is the owner of this album.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ owner: userId }, args, { user }) => user.load(userId)
    },
    primary: {
      type: Photo,
      description: `The primary Photo of this album, used as a thumbnail and banner image.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ primary: photoID }, args, { photo }) => photo.load(photoId)
    },
    url: {
      type: GqlURL,
      description: `A URL linking to the Gallery on Flickr.`
    },
    photoCount: {
      type: GqlInt,
      description: `How many photos are in this album.`
    },
    videoCount: {
      type: GqlInt,
      description: `How many videos are in this album.`
    },
    commentCount: {
      type: GqlInt,
      description: `How many comments this album has.`
    },
    views: {
      type: GqlInt,
      description: `How many views this album has.`
    },
    photos: {
      type: new GqlList(Photo),
      description: `A list of Photos belonging to this Album.`,
      args: {
        first: { type: GqlInt, defaultValue: 0 },
        last : { type: GqlInt, defaultValue: 0 },
        count: { type: GqlInt, defaultValue: 500 },
        offset: { type: GqlInt, defaultValue: 0 }
      },
      complexity: ({ count }, childComplexity) => childComplexity * count,
      resolve: async({ owner: userId, id: photosetId, photoCount, videoCount }, { first, last, count, offset }, { flickr, photo }) =>
        await fetchAlbumPhotos({
          flickr,
          userId,
          photosetId,
          offset: !!last
            ? Math.floor((photoCount + videoCount) / ((photoCount + videoCount) - (last + offset))) // count offset by n from the total
            : !!first // total pages
              ? (Math.floor((photoCount + videoCount) / first) || 1) * (first + offset)
              : offset || 1, //
          perPage: !!last ? (photoCount + videoCount) : first || count || (photoCount + videoCount)
        }).then(results => results.length > 0 ? photo.loadMany(results) : [])
    },
    comments: {
      type: new GqlList(Comment),
      description: `A list of Comments left on this Album.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ id: photosetId }, args, { flickr }) => fetchAlbumComments({ flickr, photosetId })
    },
    created: {
      type: new GqlNonNull(GqlDateTime),
      description: `The date and time when this album was created.`
    },
    updated: {
      type: new GqlNonNull(GqlDateTime),
      description: `The last date and time that this album was updated.`
    }
  })
})

export const Queries = {
  getAlbumByID: {
    type: Album,
    args: {
      user: { type: new GqlNonNull(GqlID) },
      id: { type: new GqlNonNull(GqlID) }
    },
    resolve: (parent, { user: userId, id: photosetId }, { flickr }) => fetchAlbumByID({ flickr, userId, photosetId })
  }
}

export const Definition = Album

export default { Definition, Queries }
