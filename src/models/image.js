import { invariant, missingArgument } from "@/utilities"

export default class Image {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = `${data?.id}-${data?.label.replace(` `, `_`)}`
    this.photoId = data?.id
    this.canBlog = !!data?.canBlog
    this.canPrint = !!data?.canPrint
    this.canDownload = !!data?.canDownload
    this.size = data?.label.replace(` `, `_`)
    this.width = data?.width
    this.height = data?.height
    this.source = decodeURI(data?.source)
    this.url = decodeURI(data?.url)
    this.media = data?.media
  }
}
