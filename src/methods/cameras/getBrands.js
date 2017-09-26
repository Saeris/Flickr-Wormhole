import Flickr from "@/flickr"

export default async function getBrands({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.cameras.getBrands`, { apiKey })
}
