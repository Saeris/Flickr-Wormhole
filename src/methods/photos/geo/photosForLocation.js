import Flickr from "@/flickr"

export default function photosForLocation(
  { flickr = Flickr, lat = ``, lon = `` } = {},
  { accuracy = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.geo.photosForLocation`,
    { lat, lon },
    { accuracy, extras, page, perPage },
    `read`
  )
}
