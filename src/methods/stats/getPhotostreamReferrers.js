import Flickr from "@/flickr"

export default function getPhotostreamReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(`flickr.stats.getPhotostreamReferrers`, { date, domain }, { page, perPage }, `read`)
}
