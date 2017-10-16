import Flickr from "@/flickr"

export default function editPhoto({ flickr = Flickr, galleryId = ``, photoId = ``, comment = `` } = {}) {
  return flickr.fetchResource(`flickr.galleries.editPhoto`, { galleryId, photoId, comment }, {}, `write`)
}
