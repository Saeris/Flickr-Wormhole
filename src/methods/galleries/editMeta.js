import Flickr from "@/flickr"

export default function editMeta({ flickr = Flickr, galleryId = ``, title = `` } = {}, { description = `` } = {}) {
  return flickr.fetchResource(`flickr.galleries.editMeta`, { galleryId, title }, { description }, `write`)
}
