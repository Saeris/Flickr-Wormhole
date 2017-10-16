import Flickr from "@/flickr"

export default function create({ flickr = Flickr, title = ``, primaryPhotoId = `` } = {}, { description = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.create`, { title, primaryPhotoId }, { description }, `write`)
}
