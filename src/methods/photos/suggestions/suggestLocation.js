import Flickr from "@/flickr"

async function suggestLocation(
  { apiKey = Flickr.apiKey, photoId = ``, lat = ``, lon = `` } = {},
  { accuracy = 16, placeId = ``, woeId = ``, note = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.suggestions.suggestLocation`,
    { apiKey, photoId, lat, lon },
    { accuracy, placeId, woeId, note },
    `write`
  )
}

export default suggestLocation
