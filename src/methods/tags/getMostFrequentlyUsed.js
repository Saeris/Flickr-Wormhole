import Flickr from "@/flickr"

export default function getMostFrequentlyUsed({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.tags.getMostFrequentlyUsed`, {}, {}, `read`)
}
