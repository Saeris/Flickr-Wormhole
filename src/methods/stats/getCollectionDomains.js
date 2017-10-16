import Flickr from "@/flickr"

export default function getCollectionDomains(
  { flickr = Flickr, date = `` } = {},
  { collectionId = ``, page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(`flickr.stats.getCollectionDomains`, { date }, { collectionId, page, perPage }, `read`)
}
