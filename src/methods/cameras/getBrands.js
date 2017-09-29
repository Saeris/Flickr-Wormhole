import Flickr from "@/flickr"

async function getBrands({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.cameras.getBrands`, { apiKey })
}

export default getBrands
