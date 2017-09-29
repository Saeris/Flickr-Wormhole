import Flickr from "@/flickr"

async function correctLocation(
  { apiKey = Flickr.apiKey, photoId = ``, foursquareId = `` } = {},
  { placeId = ``, woeId = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.geo.correctLocation`,
    { apiKey, photoId, foursquareId },
    { placeId, woeId },
    `write`
  )
}

export default correctLocation
