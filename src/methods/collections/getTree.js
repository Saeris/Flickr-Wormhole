import Flickr from "@/flickr"

export default function getTree({ flickr = Flickr, collectionId = `` } = {}, { userId = `` } = {}) {
  return flickr.fetchResource(`flickr.collections.getTree`, { collectionId }, { userId })
}
