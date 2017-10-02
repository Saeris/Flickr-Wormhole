import Flickr from "@/flickr"

async function getCollectionReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { collectionId = ``, page = 1, perPage = 25 } = {}
) {
  return await flickr.fetchResource(
    `flickr.stats.getCollectionReferrers`,
    { date, domain },
    { collectionId, page, perPage },
    `read`
  )
}

export default getCollectionReferrers
