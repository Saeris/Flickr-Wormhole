import { fetchUserByID, fetchPhotoByID, fetchAlbumPhotos, fetchAlbumComments } from "./resolvers"
import { User } from "./user"
import { Photo } from "./photo"
import { Comment } from "./comment"

export const Album = new GqlObject({
  name: `Album`,
  description: `A Flickr Album (Photoset) Object.`,
  fields: () => ({
    id: {
      type: GqlID,
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
      type: User,
      description: `The User who is the owner of this album.`,
      resolve: type => fetchUserByID(type.owner)
    },
    photoCount: {
      type: GqlInt,
      description: `How many photos are in this album.`
    },
    videoCount: {
      type: GqlInt,
      description: `How many videos are in this album.`
    },
    views: {
      type: GqlInt,
      description: `How many views this album has.`
    },
    commentCount: {
      type: GqlInt,
      description: `How many comments this album has.`
    },
    created: {
      type: GqlDateTime,
      description: `The date and time when this album was created.`
    },
    updated: {
      type: GqlDateTime,
      description: `The last date and time that this album was updated.`
    },
    primary: {
      type: Photo,
      description: `The primary Photo of this album, used as a thumbnail and banner image.`,
      resolve: type => fetchPhotoByID(type.primary)
    },
    photos: {
      type: new GqlList(Photo),
      description: `A list of Photos belonging to this Album.`,
      resolve: type => fetchAlbumPhotos(type.owner, type.id)
    },
    comments: {
      type: new GqlList(Comment),
      description: `A list of Comments left on this Album.`,
      resolve: type => fetchAlbumComments(type.id)
    }
  })
})

export const Queries = {
}

export const Definition = Album

export default { Definition, Queries }
