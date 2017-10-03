import {
  fetchPhotoExif,
  fetchPhotoLocation,
  fetchPlaceByID,
  fetchPhotoComments,
  fetchPeopleInPhoto
} from "@/resolvers"
import { License } from "./license"
import { User } from "./user"
import { Exif } from "./exif"
import { Place } from "./place"
import { Note } from "./note"
import { Comment } from "./comment"
import { Person } from "./person"
import { Tag } from "./tag"
import { Image } from "./image"

export const Photo = new GqlObject({
  name: `Photo`,
  description: `A Flickr Photo Object.`,
  fields: () => ({
    id: {
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
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ license }, args, { licenses }) => await licenses.load(`licenses`)
        .then(results => results.filter(({ id }) => id === license)[0]) || null
    },
    owner: {
      type: User,
      description: `The User who owns this Photo.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ owner: userId }, args, { user }) => user.load(userId)
    },
    title: {
      type: GqlString,
      description: `The title of the Photo.`
    },
    caption: {
      type: GqlString,
      description: `The caption of the Photo.`
    },
    exif: {
      type: Exif,
      description: `The EXIF Data of the Photo.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ id: photoId }, args, { flickr }) => fetchPhotoExif({ flickr, photoId })
    },
    views: {
      type: GqlInt,
      description: `The number of views the Photo has received.`
    },
    format: {
      type: GqlString,
      description: `The Image format of the Photo.`
    },
    media: {
      type: GqlString,
      description: `The media type of the photo. (Photo or Video)`
    },
    favorite: {
      type: GqlBool,
      description: `Flag determining whether the current User has favorited this Photo.`
    },
    isPublic: {
      type: GqlBool,
      description: `Flag determining whether the Photo is viewable publicly.`
    },
    friends: {
      type: GqlBool,
      description: `Flag determining whether the Photo is viewable by friends of the Owner.`
    },
    family: {
      type: GqlBool,
      description: `Flag determining whether the Photo is viewable by family of the Owner.`
    },
    posted: {
      type: GqlDateTime,
      description: `Date and time on which the Photo was first uploaded.`
    },
    taken: {
      type: GqlDateTime,
      description: `Date and time on which the Photo was taken.`
    },
    updated: {
      type: GqlDateTime,
      description: `Date and time on which the photo was last updated.`
    },
    location: {
      type: Place,
      description: `The Place where the Photo was taken.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ id: photoId, hasLocation }, args, { flickr }) => !!hasLocation
        ? await fetchPhotoLocation({ flickr, photoId })
          .then(placeId => !!placeId ? fetchPlaceByID(({ flickr, placeId })) : null)
        : null
    },
    notes: {
      type: new GqlList(Note),
      description: `A List of Notes left on this Photo.`
    },
    comments: {
      type: new GqlList(Comment),
      description: `A list of Comments left on this Photo.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ id: photoId, hasComments }, args, { flickr }) =>
        await !!hasComments ? fetchPhotoComments({ flickr, photoId }) : []
    },
    people: {
      type: new GqlList(Person),
      description: `A list of People who are tagged in this photo.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ id: photoId, hasPeople }, args, { flickr }) =>
        await !!hasPeople ? fetchPeopleInPhoto({ flickr, photoId }) : []
    },
    tags: {
      type: new GqlList(Tag),
      description: `A list of Tags this Photo has been tagged with.`
    },
    images: {
      type: new GqlList(Image),
      description: `A list of Image URLs for this Photo.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ id: photoId }, args, { images }) => images.load(photoId)
    }
  })
})

export const Queries = {
  getPhotoById: {
    type: Photo,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: ``
      }
    },
    resolve: (parent, { id: photoId }, { photo }) => photo.load(photoId)
  }
}

export const Definition = Photo

export default { Definition, Queries }
