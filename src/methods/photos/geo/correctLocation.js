import Flickr from "@/flickr"

async function correctLocation(
  { flickr = Flickr, photoId = ``, foursquareId = `` } = {},
  { placeId = ``, woeId = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.geo.correctLocation`,
    { photoId, foursquareId },
    { placeId, woeId },
    `write`
  )
}

export default correctLocation
