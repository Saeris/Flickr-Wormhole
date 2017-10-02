import Flickr from "@/flickr"

async function getPhotosetReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { photosetId = ``, page = 1, perPage = 25 } = {}
) {
  return await flickr.fetchResource(
    `flickr.stats.getPhotosetReferrers`,
    { date, domain },
    { photosetId, page, perPage },
    `read`
  )
}

export default getPhotosetReferrers
