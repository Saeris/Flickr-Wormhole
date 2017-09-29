import Flickr from "@/flickr"

async function getShapeHistory({ apiKey = Flickr.apiKey } = {}, { placeId = ``, woeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.getShapeHistory`, { apiKey }, { placeId, woeId })
}

export default getShapeHistory
