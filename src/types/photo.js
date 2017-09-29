import { loadLicenses } from "./loaders"
import {
  fetchUserByID,
  fetchPhotoExif,
  fetchPhotoLocation,
  fetchPlaceByID,
  fetchPhotoNotes,
  fetchPhotoComments,
  fetchPeopleInPhoto,
  fetchPhotoTags,
  fetchPhotoImages,
  fetchUserPhotos
} from "./resolvers"
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
      resolve: async type => await loadLicenses.load(`licenses`)
        .then(results => results.filter(res => res.id === type.license)[0]) || null
    },
    owner: {
      type: User,
      description: `The User who owns this Photo.`,
      resolve: async type => await fetchUserByID(type.owner)
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
      resolve: async type => await fetchPhotoExif(type.id)
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
    public: {
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
      resolve: async type => await fetchPhotoLocation(type.id).then(res => !!res ? fetchPlaceByID(res) : null)
    },
    notes: {
      type: new GqlList(Note),
      description: `A List of Notes left on this Photo.`,
      resolve: async type => await fetchPhotoNotes(type.id)
    },
    comments: {
      type: new GqlList(Comment),
      description: `A list of Comments left on this Photo.`,
      resolve: async type => await fetchPhotoComments(type.id)
    },
    people: {
      type: new GqlList(Person),
      description: `A list of People who are tagged in this photo.`,
      resolve: async type => await fetchPeopleInPhoto(type.id)
    },
    tags: {
      type: new GqlList(Tag),
      description: `A list of Tags this Photo has been tagged with.`,
      resolve: async type => await fetchPhotoTags(type.id)
    },
    images: {
      type: new GqlList(Image),
      description: `A list of Image URLs for this Photo.`,
      resolve: async type => await fetchPhotoImages(type.id)
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
    resolve: (parent, args, context) => fetchUserPhotos(args.id)
  }
}

export const Definition = Photo

export default { Definition, Queries }
