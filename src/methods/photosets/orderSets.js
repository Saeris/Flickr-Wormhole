import Flickr from "@/flickr"

async function orderSets({ apiKey = Flickr.apiKey, photosetIds = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.orderSets`, { apiKey, photosetId }, {}, `write`)
}

export default orderSets
