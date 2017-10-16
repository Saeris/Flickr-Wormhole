import Flickr from "@/flickr"

export default function add({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.favorites.add`, { photoId }, {}, `write`)
}
