import Flickr from "@/flickr"

export default async function getPlaceTypes({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.places.getPlaceTypes`, { apiKey })
}
