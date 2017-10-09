import { invariant, missingArgument } from "@/utilities"
import Note from "./note"
import Tag from "./tag"

export default class Photo {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.photoId = data?.id
    this.secret = data?.secret
    this.server = data?.server
    this.license = data?.license
    this.owner = (data?.owner)?.nsid
    this.title = (data?.title)?._content
    this.caption = (data?.description)?._content
    this.views = data?.views
    this.format = data?.originalformat
    this.media = data?.media
    this.isPublic = !!(data?.visibility)?.ispublic
    this.friends = !!(data?.visibility)?.isfriend
    this.family = !!(data?.visibility)?.isfamily
    this.notes = data?.notes?.note?.map(note => new Note({ photo: data?.id, ...note }))
    this.tags = data?.tags?.tag?.map(tag => new Tag({ photo: data?.id, ...tag }))
    this.hasLocation = !!data.location
    this.commentsCount = parseInt(data.comments?._content || 0, 10)
    this.hasPeople = !!data.people?.haspeople
    this.posted = data.dates?.posted
    this.taken = data.dates?.taken
    this.updated = data.dates?.lastupdate
  }
}
