import Flickr from "@/flickr"

export default function editMeta({ flickr = Flickr, photosetId = ``, title = `` } = {}, { description = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.editMeta`, { photosetId, title }, { description }, `write`)
}
