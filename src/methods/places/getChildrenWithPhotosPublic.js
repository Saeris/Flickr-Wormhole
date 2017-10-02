import Flickr from "@/flickr"

async function getChildrenWithPhotosPublic({ flickr = Flickr } = {}, { placeId = ``, woeId = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.getChildrenWithPhotosPublic`, {}, { placeId, woeId })
}

export default getChildrenWithPhotosPublic
