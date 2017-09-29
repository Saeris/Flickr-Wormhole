import Flickr from "@/flickr"

async function getPlaceTypes({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.places.getPlaceTypes`, { apiKey })
}

export default getPlaceTypes
