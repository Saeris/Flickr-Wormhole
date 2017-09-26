import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, collectionId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.collections.getInfo`, { apiKey, collectionId }, {}, `read`)
}
