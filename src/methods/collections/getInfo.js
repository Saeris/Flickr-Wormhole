import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, collectionId = `` } = {}) {
  return flickr.fetchResource(`flickr.collections.getInfo`, { collectionId }, {}, `read`)
}
