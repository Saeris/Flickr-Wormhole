import Flickr from "@/flickr"

export default async function getTotalViews({ apiKey = Flickr.apiKey, date = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getTotalViews`, { apiKey, date }, {}, `read`)
}
