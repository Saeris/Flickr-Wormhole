import Flickr from "@/flickr"

export default function addPhoto({ flickr = Flickr, galleryId = ``, photoId = `` } = {}, { comment = `` } = {}) {
  return flickr.fetchResource(`flickr.galleries.addPhoto`, { galleryId, photoId }, { comment }, `write`)
}
