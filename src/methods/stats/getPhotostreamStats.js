import Flickr from "@/flickr"

export default function getPhotostreamStats({ flickr = Flickr, date = `` } = {}) {
  return flickr.fetchResource(`flickr.stats.getPhotostreamStats`, { date }, {}, `read`)
}
