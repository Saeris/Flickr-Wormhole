import Flickr from "@/flickr"

export default function getPerms({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getPerms`, { photoId }, {}, `read`)
}
