import Flickr from "@/flickr"

export default function placesForBoundingBox({ flickr = Flickr, bbox = ``, placeTypeId = `` } = {}) {
  return flickr.fetchResource(`flickr.places.placesForBoundingBox`, { bbox, placeTypeId })
}
