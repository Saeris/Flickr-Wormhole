import Flickr from "@/flickr"

async function suggestLocation(
  { flickr = Flickr, photoId = ``, lat = ``, lon = `` } = {},
  { accuracy = 16, placeId = ``, woeId = ``, note = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.suggestions.suggestLocation`,
    { photoId, lat, lon },
    { accuracy, placeId, woeId, note },
    `write`
  )
}

export default suggestLocation
