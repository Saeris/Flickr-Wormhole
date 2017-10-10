import { invariant, missingArgument } from "@/utilities"

export default class Gallery {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.galleryId = data?.id
    this.title = (data?.title)?._content
    this.description = (data?.description)?._content
    this.owner = data?.owner
    this.primary = data?.primary_photo_id
    this.url = data?.url
    this.photoCount = data?.count_photos
    this.videoCount = data?.count_videos
    this.commentCount = data?.count_comments
    this.views = data?.count_views
    this.created = new Date(parseInt((data?.date_create || 0) * 1000, 10))
    this.updated = new Date(parseInt((data?.date_update || 0) * 1000, 10))
  }
}
