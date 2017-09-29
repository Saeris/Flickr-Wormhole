import Flickr from "@/flickr"

async function getTotalViews({ apiKey = Flickr.apiKey, date = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getTotalViews`, { apiKey, date }, {}, `read`)
}

export default getTotalViews
