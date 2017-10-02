import Flickr from "@/flickr"

async function getBrandModels({ flickr = Flickr, brand = `` } = {}) {
  return await flickr.fetchResource(`flickr.cameras.getBrandModels`, { brand })
}

export default getBrandModels
