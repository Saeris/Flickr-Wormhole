import Flickr from "@/flickr"

export default function getChildrenWithPhotosPublic({ flickr = Flickr } = {}, { placeId = ``, woeId = `` } = {}) {
  return flickr.fetchResource(`flickr.places.getChildrenWithPhotosPublic`, {}, { placeId, woeId })
}
