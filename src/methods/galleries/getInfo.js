import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, galleryId = `` } = {}) {
  return flickr.fetchResource(`flickr.galleries.getInfo`, { galleryId })
}
