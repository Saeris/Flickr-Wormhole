import Flickr from "@/flickr"

export default function removeLocation({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.geo.removeLocation`, { photoId }, {}, `write`)
}
