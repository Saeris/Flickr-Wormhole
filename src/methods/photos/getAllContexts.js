import Flickr from "@/flickr"

export default function getAllContexts({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getAllContexts`, { photoId })
}
