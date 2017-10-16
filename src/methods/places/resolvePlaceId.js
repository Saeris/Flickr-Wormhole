import Flickr from "@/flickr"

export default function resolvePlaceId({ flickr = Flickr, placeId = `` } = {}) {
  return flickr.fetchResource(`flickr.places.resolvePlaceId`, { placeId })
}
