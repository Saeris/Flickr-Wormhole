import Flickr from "@/flickr"

async function getCollectionDomains(
  { flickr = Flickr, date = `` } = {},
  { collectionId = ``, page = 1, perPage = 25 } = {}
) {
  return await flickr.fetchResource(
    `flickr.stats.getCollectionDomains`,
    { date },
    { collectionId, page, perPage },
    `read`
  )
}

export default getCollectionDomains
