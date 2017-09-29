import Flickr from "@/flickr"

async function getCollectionStats({ apiKey = Flickr.apiKey, date = ``, collectionId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getCollectionStats`, { apiKey, date, collectionId }, {}, `read`)
}

export default getCollectionStats
