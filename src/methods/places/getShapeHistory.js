import Flickr from "@/flickr"

export default function getShapeHistory({ flickr = Flickr } = {}, { placeId = ``, woeId = `` } = {}) {
  return flickr.fetchResource(`flickr.places.getShapeHistory`, {}, { placeId, woeId })
}
