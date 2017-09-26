import Flickr from "@/flickr"

export default async function getPhotosetReferrers(
  { apiKey = Flickr.apiKey, date = ``, domain = `` } = {},
  { photosetId = ``, page = 1, perPage = 25 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.stats.getPhotosetReferrers`,
    { apiKey, date, domain },
    { photosetId, page, perPage },
    `read`
  )
}
