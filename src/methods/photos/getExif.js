import Flickr from "@/flickr"

export default function getExif({ flickr = Flickr, photoId = `` } = {}, { secret = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getExif`, { photoId }, { secret })
}
