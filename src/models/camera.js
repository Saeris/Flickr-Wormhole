// @flow
import { invariant, missingArgument } from "@/utilities"

export default class Camera {
  id: ID
  cameraId: ID
  name: string
  brand: ID
  megapixels: ?string
  zoom: ?string
  lcdSize: ?string
  storage: Array<string>
  images: Array<mixed>

  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.cameraId = data?.id
    this.name = (data?.name)?._content
    this.brand = data.brand
    this.megapixels = ((data?.details)?.megapixels)?._content || null
    this.zoom = ((data?.details)?.zoom)?._content || null
    this.lcdSize = ((data?.details)?.lcd_screen_size)?._content || null
    this.storage = data?.details?.memory_type?._content.split(`, `) || []
    this.images = Object.values(data?.images || {}).map(image => decodeURI(image._content)) || []
  }
}
