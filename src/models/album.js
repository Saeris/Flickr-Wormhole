// @flow
import { invariant, missingArgument } from "@/utilities"

export default class Album {
  id: ID
  albumId: ID
  title: string
  description: string
  owner: string
  slug: string
  photoCount: number
  videoCount: number
  views: number
  commentCount: number
  created: Date
  updated: Date
  primary: string

  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.albumId = data?.id
    this.title = (data?.title)?._content
    this.description = (data?.description)?._content
    this.owner = data?.owner
    this.slug = this.toSlug(this.title)
    this.photoCount = parseInt(data?.count_photos || 0, 10)
    this.videoCount = parseInt(data?.count_videos || 0, 10)
    this.views = parseInt(data?.count_views || 0, 10)
    this.commentCount = parseInt(data?.count_comments || 0, 10)
    this.created = new Date(parseInt((data?.date_create || 0) * 1000, 10))
    this.updated = new Date(parseInt((data?.date_update || 0) * 1000, 10))
    this.primary = data?.primary
  }

  toSlug(text: string): string {
    return text.toString().toLowerCase()
      // Replace spaces with -
      .replace(/\s+/g, `-`)
      // Remove all non-word chars
      .replace(/[^\w-]+/g, ``)
      // Replace multiple - with single -
      .replace(/--+/g, `-`)
      // Trim - from start of text
      .replace(/^-+/, ``)
      // Trim - from end of text
      .replace(/-+$/, ``)
  }
}
