import Flickr from "@/flickr"

async function getChildrenWithPhotosPublic({ apiKey = Flickr.apiKey } = {}, { placeId = ``, woeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.getChildrenWithPhotosPublic`, { apiKey }, { placeId, woeId })
}

export default getChildrenWithPhotosPublic
