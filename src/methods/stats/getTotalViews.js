import Flickr from "@/flickr"

async function getTotalViews({ flickr = Flickr, date = `` } = {}) {
  return await flickr.fetchResource(`flickr.stats.getTotalViews`, { date }, {}, `read`)
}

export default getTotalViews
