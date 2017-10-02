import Flickr from "@/flickr"

async function findByLatLon({ flickr = Flickr, lat = ``, lon = `` } = {}, { accuracy = 16 } = {}) {
  return await flickr.fetchResource(`flickr.places.findByLatLon`, { lat, lon }, { accuracy })
}

export default findByLatLon
