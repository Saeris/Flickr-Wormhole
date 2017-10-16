import Flickr from "@/flickr"

export default function getList({ flickr = Flickr } = {}, { service = `` } = {}) {
  return flickr.fetchResource(`flickr.blogs.getList`, {}, { service }, `read`)
}
