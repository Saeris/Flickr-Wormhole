import Flickr from "@/flickr"

async function getCollectionDomains(
  { apiKey = Flickr.apiKey, date = `` } = {},
  { collectionId = ``, page = 1, perPage = 25 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.stats.getCollectionDomains`,
    { apiKey, date },
    { collectionId, page, perPage },
    `read`
  )
}

export default getCollectionDomains
