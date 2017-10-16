import Flickr from "@/flickr"

export default function getListPhoto({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.tags.getListPhoto`, { photoId })
}
