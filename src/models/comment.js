import { invariant, missingArgument } from "@/utilities"

export default class Comment {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.commentId = data?.id
    this.author = data?.author
    this.photo = data?.photo
    this.album = data?.album
    this.gallery = data?.gallery
    this.created = data?.datecreate
    this.url = decodeURI(data?.permalink)
    this.text = data?._content
  }
}
