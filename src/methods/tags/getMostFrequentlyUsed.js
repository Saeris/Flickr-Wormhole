import Flickr from "@/flickr"

async function getMostFrequentlyUsed({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.tags.getMostFrequentlyUsed`, {}, {}, `read`)
}

export default getMostFrequentlyUsed
