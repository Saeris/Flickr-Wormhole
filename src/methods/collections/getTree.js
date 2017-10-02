import Flickr from "@/flickr"

async function getTree({ flickr = Flickr, collectionId = `` } = {}, { userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.collections.getTree`, { collectionId }, { userId })
}

export default getTree
