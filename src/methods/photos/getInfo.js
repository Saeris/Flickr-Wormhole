import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, photoId = `` } = {}, { secret = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getInfo`, { photoId }, { secret })
}
