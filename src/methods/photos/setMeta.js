import Flickr from "@/flickr"

export default function setMeta({ flickr = Flickr, photoId = `` } = {}, { title = ``, description = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.setMeta`, { photoId }, { title, description }, `write`)
}
