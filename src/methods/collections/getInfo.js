import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, collectionId = `` } = {}) {
  return await flickr.fetchResource(`flickr.collections.getInfo`, { collectionId }, {}, `read`)
}

export default getInfo
