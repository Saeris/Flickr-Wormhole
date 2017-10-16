import Flickr from "@/flickr"

export default function setLocation(
  { flickr = Flickr, photoId = ``, lat = ``, lon = `` } = {},
  { accuracy = ``, context = `0` } = {}
) {
  return flickr.fetchResource(`flickr.photos.geo.setLocation`, { photoId, lat, lon }, { accuracy, context }, `write`)
}
