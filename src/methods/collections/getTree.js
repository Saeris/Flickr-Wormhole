import Flickr from "@/flickr"

async function getTree({ apiKey = Flickr.apiKey, collectionId = `` } = {}, { userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.collections.getTree`, { apiKey, collectionId }, { userId })
}

export default getTree
