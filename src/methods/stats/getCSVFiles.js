import Flickr from "@/flickr"

export default async function getCSVFiles({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getCSVFiles`, { apiKey }, {}, `read`)
}
