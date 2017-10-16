import Flickr from "@/flickr"

export default function batchCorrectLocation(
  { flickr = Flickr, lat = ``, lon = ``, accuracy = `` } = {},
  { placeId = ``, woeId = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.geo.batchCorrectLocation`,
    { lat, lon, accuracy },
    { placeId, woeId },
    `write`
  )
}
