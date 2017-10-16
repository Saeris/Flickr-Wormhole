import Flickr from "@/flickr"

export default function getPhotostreamDomains({ flickr = Flickr, date = `` } = {}, { page = 1, perPage = 25 } = {}) {
  return flickr.fetchResource(`flickr.stats.getPhotostreamDomains`, { date }, { page, perPage }, `read`)
}
