import Flickr from "@/flickr"

export default function getList({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.panda.getList`, {})
}
