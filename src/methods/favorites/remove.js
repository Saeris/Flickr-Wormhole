import Flickr from "@/flickr"

export default function remove({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.favorites.remove`, { photoId }, {}, `write`)
}
