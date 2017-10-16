import Flickr from "@/flickr"

export default function getCSVFiles({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.stats.getCSVFiles`, {}, {}, `read`)
}
