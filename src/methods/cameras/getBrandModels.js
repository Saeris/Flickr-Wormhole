import Flickr from "@/flickr"

async function getBrandModels({ apiKey = Flickr.apiKey, brand = `` } = {}) {
  return await Flickr.fetchResource(`flickr.cameras.getBrandModels`, { apiKey, brand })
}

export default getBrandModels
