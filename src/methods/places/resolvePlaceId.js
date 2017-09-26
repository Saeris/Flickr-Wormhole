import Flickr from "@/flickr"

export default async function resolvePlaceId({ apiKey = Flickr.apiKey, placeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.resolvePlaceId`, { apiKey, placeId })
}
