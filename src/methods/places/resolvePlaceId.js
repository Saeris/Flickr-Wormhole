import Flickr from "@/flickr"

async function resolvePlaceId({ apiKey = Flickr.apiKey, placeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.resolvePlaceId`, { apiKey, placeId })
}

export default resolvePlaceId
