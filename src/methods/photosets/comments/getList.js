import Flickr from "@/flickr"

export default function getList({ flickr = Flickr, photosetId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.comments.getList`, { photosetId })
}
