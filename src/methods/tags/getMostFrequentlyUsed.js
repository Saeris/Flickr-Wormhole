import Flickr from "@/flickr"

async function getMostFrequentlyUsed({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getMostFrequentlyUsed`, { apiKey }, {}, `read`)
}

export default getMostFrequentlyUsed
