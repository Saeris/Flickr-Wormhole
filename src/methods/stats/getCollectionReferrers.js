import Flickr from "@/flickr"

async function getCollectionReferrers(
  { apiKey = Flickr.apiKey, date = ``, domain = `` } = {},
  { collectionId = ``, page = 1, perPage = 25 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.stats.getCollectionReferrers`,
    { apiKey, date, domain },
    { collectionId, page, perPage },
    `read`
  )
}

export default getCollectionReferrers
