import Flickr from "@/flickr"

export default async function placesForBoundingBox({ apiKey = Flickr.apiKey, bbox = ``, placeTypeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.placesForBoundingBox`, { apiKey, bbox, placeTypeId })
}
