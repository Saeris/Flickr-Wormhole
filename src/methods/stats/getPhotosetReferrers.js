import Flickr from "@/flickr"

export default function getPhotosetReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { photosetId = ``, page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(
    `flickr.stats.getPhotosetReferrers`,
    { date, domain },
    { photosetId, page, perPage },
    `read`
  )
}
