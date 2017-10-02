import Flickr from "@/flickr"

async function setLocation(
  { flickr = Flickr, photoId = ``, lat = ``, lon = `` } = {},
  { accuracy = ``, context = `0` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.geo.setLocation`,
    { photoId, lat, lon },
    { accuracy, context },
    `write`
  )
}

export default setLocation
