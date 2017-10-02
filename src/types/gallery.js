import { User } from "./user"
import { Photo } from "./photo"

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
    url: {
      type: GqlURL,
      description: `A URL linking to the Gallery on Flickr.`
    },
    owner: {
      type: User,
      description: `The User who is the owner of this Gallery.`
    },
    created: {
      type: GqlDateTime,
      description: `The date and time when this Gallery was created.`
    },
    updated: {
      type: GqlDateTime,
      description: `The last date and time that this Gallery was updated.`
    },
    primary: {
      type: Photo,
      description: `The primary Photo of this Gallery, used as a thumbnail and banner image.`
    },
    photos: {
      type: new GqlList(Photo),
      description: `A list of Photos belonging to this Gallery.`
    }
  })
})

export const Queries = {
}

export const Definition = Gallery

export default { Definition, Queries }
