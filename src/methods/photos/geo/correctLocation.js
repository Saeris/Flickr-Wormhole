import Flickr from "@/flickr"

export default function correctLocation(
  { flickr = Flickr, photoId = ``, foursquareId = `` } = {},
  { placeId = ``, woeId = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.geo.correctLocation`,
    { photoId, foursquareId },
    { placeId, woeId },
    `write`
  )
}
