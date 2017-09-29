import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey, collectionId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.collections.getInfo`, { apiKey, collectionId }, {}, `read`)
}

export default getInfo
