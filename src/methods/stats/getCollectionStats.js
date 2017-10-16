import Flickr from "@/flickr"

export default function getCollectionStats({ flickr = Flickr, date = ``, collectionId = `` } = {}) {
  return flickr.fetchResource(`flickr.stats.getCollectionStats`, { date, collectionId }, {}, `read`)
}
