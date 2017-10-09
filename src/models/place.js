import { invariant, missingArgument } from "@/utilities"

export default class Place {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.placeId
    this.name = data?.name
    this.placeId = data?.place_id
    this.woeId = data?.woeid
    this.lat = data?.latitude
    this.lon = data?.longitude
    this.url = data?.place_url
    this.type = data?.place_type
    this.timezone = data?.timezone
  }
}
