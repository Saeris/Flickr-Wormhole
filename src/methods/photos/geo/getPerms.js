import Flickr from "@/flickr"

export default function getPerms({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.geo.getPerms`, { photoId }, {}, `read`)
}
