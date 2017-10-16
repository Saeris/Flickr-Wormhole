import Flickr from "@/flickr"

export default function suggestLocation(
  { flickr = Flickr, photoId = ``, lat = ``, lon = `` } = {},
  { accuracy = 16, placeId = ``, woeId = ``, note = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.suggestions.suggestLocation`,
    { photoId, lat, lon },
    { accuracy, placeId, woeId, note },
    `write`
  )
}
