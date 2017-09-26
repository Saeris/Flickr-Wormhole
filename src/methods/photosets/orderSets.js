import Flickr from "@/flickr"

export default async function orderSets({ apiKey = Flickr.apiKey, photosetIds = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.orderSets`, { apiKey, photosetId }, {}, `write`)
}
