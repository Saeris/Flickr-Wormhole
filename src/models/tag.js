import { invariant, missingArgument } from "@/utilities"

export default class Tag {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.photo = data?.photo
    this.author = data?.author
    this.text = data?.raw
  }
}
