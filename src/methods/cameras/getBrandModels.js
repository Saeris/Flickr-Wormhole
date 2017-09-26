import Flickr from "@/flickr"

export default async function getBrandModels({ apiKey = Flickr.apiKey, brand = `` } = {}) {
  return await Flickr.fetchResource(`flickr.cameras.getBrandModels`, { apiKey, brand })
}
