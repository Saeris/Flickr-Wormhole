import Flickr from "@/flickr"

async function getShapeHistory({ flickr = Flickr } = {}, { placeId = ``, woeId = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.getShapeHistory`, {}, { placeId, woeId })
}

export default getShapeHistory
