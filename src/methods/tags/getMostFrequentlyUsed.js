import Flickr from "@/flickr"

export default async function getMostFrequentlyUsed({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getMostFrequentlyUsed`, { apiKey }, {}, `read`)
}
