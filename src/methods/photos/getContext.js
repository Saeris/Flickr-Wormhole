import Flickr from "@/flickr"

export default function getContext({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getContext`, { photoId })
}
