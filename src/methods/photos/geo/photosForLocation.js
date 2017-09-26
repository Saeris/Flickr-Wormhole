import Flickr from "@/flickr"

export default async function photosForLocation(
  { apiKey = Flickr.apiKey, lat = ``, lon = `` } = {},
  { accuracy = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.geo.photosForLocation`,
    { apiKey, lat, lon },
    { accuracy, extras, page, perPage },
    `read`
  )
}
