import Flickr from "@/flickr"

async function batchCorrectLocation(
  { apiKey = Flickr.apiKey, lat = ``, lon = ``, accuracy = `` } = {},
  { placeId = ``, woeId = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.geo.batchCorrectLocation`,
    { apiKey, lat, lon, accuracy },
    { placeId, woeId },
    `write`
  )
}

export default batchCorrectLocation
