import Flickr from "@/flickr"

async function orderSets({ flickr = Flickr, photosetIds = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.orderSets`, { photosetId }, {}, `write`)
}

export default orderSets
