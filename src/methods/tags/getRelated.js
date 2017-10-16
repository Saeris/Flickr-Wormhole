import Flickr from "@/flickr"

export default function getRelated({ flickr = Flickr, tag = `` } = {}) {
  return flickr.fetchResource(`flickr.tags.getRelated`, { tag })
}
