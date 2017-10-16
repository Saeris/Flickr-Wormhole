import Flickr from "@/flickr"

export default function getLocation({ flickr = Flickr, photoId = `` } = {}, { extras = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.geo.getLocation`, { photoId }, { extras })
}
