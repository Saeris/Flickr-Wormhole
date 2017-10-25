// @flow
import { invariant, missingArgument } from "@/utilities"

export default class Comment {
  id: ID
  commentId: ID
  author: ID
  photo: ?ID
  album: ?ID
  gallery: ?ID
  created: Date
  url: string
  text: string

  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.commentId = data?.id
    this.author = data?.author
    this.photo = data?.photo || null
    this.album = data?.album || null
    this.gallery = data?.gallery || null
    this.created = new Date(parseInt((data?.datecreate || 0) * 1000, 10))
    this.url = decodeURI(data?.permalink)
    this.text = data?._content
  }
}
