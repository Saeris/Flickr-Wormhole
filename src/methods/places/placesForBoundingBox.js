import Flickr from "@/flickr"

async function placesForBoundingBox({ flickr = Flickr, bbox = ``, placeTypeId = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.placesForBoundingBox`, { bbox, placeTypeId })
}

export default placesForBoundingBox
