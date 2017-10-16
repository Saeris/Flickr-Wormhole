import Flickr from "@/flickr"

export default function getSizes({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getSizes`, { photoId })
}
