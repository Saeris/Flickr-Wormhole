import Flickr from "@/flickr"

export default function getListUser({ flickr = Flickr } = {}, { userId = `` } = {}) {
  return flickr.fetchResource(`flickr.tags.getListUser`, {}, { userId })
}
