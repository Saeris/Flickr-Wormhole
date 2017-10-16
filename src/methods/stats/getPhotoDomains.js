import Flickr from "@/flickr"

export default function getPhotoDomains(
  { flickr = Flickr, date = `` } = {},
  { photoId = ``, page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(`flickr.stats.getPhotoDomains`, { date }, { photoId, page, perPage }, `read`)
}
