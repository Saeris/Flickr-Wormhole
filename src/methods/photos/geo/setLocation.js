import Flickr from "@/flickr"

export default async function setLocation(
  { apiKey = Flickr.apiKey, photoId = ``, lat = ``, lon = `` } = {},
  { accuracy = ``, context = `0` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.geo.setLocation`,
    { apiKey, photoId, lat, lon },
    { accuracy, context },
    `write`
  )
}
