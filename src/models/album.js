import { invariant, missingArgument } from "@/utilities"

export default class Album {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.title = (data?.title)?._content
    this.description = (data?.description)?._content
    this.owner = data?.owner
    this.photoCount = data?.count_photos
    this.videoCount = data?.count_videos
    this.views = data?.count_views
    this.commentCount = data?.count_comments
    this.created = data?.date_create
    this.updated = data?.date_update
    this.primary = data?.primary
  }
}
