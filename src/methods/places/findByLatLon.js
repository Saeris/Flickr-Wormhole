import Flickr from "@/flickr"

export default async function findByLatLon(
  { apiKey = Flickr.apiKey, lat = ``, lon = `` } = {},
  { accuracy = 16 } = {}
) {
  return await Flickr.fetchResource(`flickr.places.findByLatLon`, { apiKey, lat, lon }, { accuracy })
}
