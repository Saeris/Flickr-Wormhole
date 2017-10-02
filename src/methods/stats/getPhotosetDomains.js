import Flickr from "@/flickr"

async function getPhotosetDomains(
  { flickr = Flickr, date = `` } = {},
  { photosetId = ``, page = 1, perPage = 25 } = {}
) {
  return await flickr.fetchResource(`flickr.stats.getPhotosetDomains`, { date }, { photosetId, page, perPage }, `read`)
}

export default getPhotosetDomains
