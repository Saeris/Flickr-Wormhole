import Flickr from "@/flickr"

export default function remove({ flickr = Flickr, photosetId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.delete`, { photosetId }, {}, `write`)
}
