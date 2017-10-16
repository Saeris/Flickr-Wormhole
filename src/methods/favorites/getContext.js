import Flickr from "@/flickr"

export default function getContext({ flickr = Flickr, photoId = ``, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.favorites.getContext`, { photoId, userId })
}
