import Flickr from "@/flickr"

async function photosForLocation(
  { flickr = Flickr, lat = ``, lon = `` } = {},
  { accuracy = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.geo.photosForLocation`,
    { lat, lon },
    { accuracy, extras, page, perPage },
    `read`
  )
}

export default photosForLocation
