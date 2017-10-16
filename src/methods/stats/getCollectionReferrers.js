import Flickr from "@/flickr"

export default function getCollectionReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { collectionId = ``, page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(
    `flickr.stats.getCollectionReferrers`,
    { date, domain },
    { collectionId, page, perPage },
    `read`
  )
}
