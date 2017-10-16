import Flickr from "@/flickr"

export default function getContext({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.getContext`, { photosetId, photoId })
}
