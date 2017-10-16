import Flickr from "@/flickr"

export default function getTotalViews({ flickr = Flickr, date = `` } = {}) {
  return flickr.fetchResource(`flickr.stats.getTotalViews`, { date }, {}, `read`)
}
