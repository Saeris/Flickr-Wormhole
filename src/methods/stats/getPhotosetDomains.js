import Flickr from "@/flickr"

async function getPhotosetDomains(
  { apiKey = Flickr.apiKey, date = `` } = {},
  { photosetId = ``, page = 1, perPage = 25 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.stats.getPhotosetDomains`,
    { apiKey, date },
    { photosetId, page, perPage },
    `read`
  )
}

export default getPhotosetDomains
