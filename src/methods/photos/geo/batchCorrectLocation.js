import Flickr from "@/flickr"

async function batchCorrectLocation(
  { flickr = Flickr, lat = ``, lon = ``, accuracy = `` } = {},
  { placeId = ``, woeId = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.geo.batchCorrectLocation`,
    { lat, lon, accuracy },
    { placeId, woeId },
    `write`
  )
}

export default batchCorrectLocation
