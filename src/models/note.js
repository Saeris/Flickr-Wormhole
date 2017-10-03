import { invariant, missingArgument } from "@/utilities"

export default class Note {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.photo = data?.photo
    this.author = data?.author
    this.text = data?._content
    this.x = data?.x
    this.y = data?.y
    this.width = data?.w
    this.height = data?.h
  }
}
