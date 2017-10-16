import Flickr from "@/flickr"

export default function getPhotosetDomains(
  { flickr = Flickr, date = `` } = {},
  { photosetId = ``, page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(`flickr.stats.getPhotosetDomains`, { date }, { photosetId, page, perPage }, `read`)
}
