import { User } from "./user"
import { Photo } from "./photo"
import { Comment } from "./comment"

export const Gallery = new GqlObject({
  name: `Gallery`,
  description: `A Flickr Gallery Object.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The Gallery's ID.`
    },
    title: {
      type: GqlString,
      description: `The name of this Gallery.`
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
      description: `A list of Photos belonging to this Gallery.`
    },
    comments: {
      type: new GqlList(Comment),
      description: `A list of Comments left on this Album.`
    },
    created: {
      type: GqlDateTime,
      description: `The date and time when this Gallery was created.`
    },
    updated: {
      type: GqlDateTime,
      description: `The last date and time that this Gallery was updated.`
    }
  })
})

export const Queries = {
}

export const Definition = Gallery

export default { Definition, Queries }
