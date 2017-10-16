import Flickr from "@/flickr"

export default function findByLatLon({ flickr = Flickr, lat = ``, lon = `` } = {}, { accuracy = 16 } = {}) {
  return flickr.fetchResource(`flickr.places.findByLatLon`, { lat, lon }, { accuracy })
}
