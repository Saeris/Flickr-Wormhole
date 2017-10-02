import Flickr from "@/flickr"

async function resolvePlaceId({ flickr = Flickr, placeId = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.resolvePlaceId`, { placeId })
}

export default resolvePlaceId
