import Flickr from "@/flickr"

async function getCollectionStats({ flickr = Flickr, date = ``, collectionId = `` } = {}) {
  return await flickr.fetchResource(`flickr.stats.getCollectionStats`, { date, collectionId }, {}, `read`)
}

export default getCollectionStats
