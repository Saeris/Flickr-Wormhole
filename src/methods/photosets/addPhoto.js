import Flickr from "@/flickr"

export default function addPhoto({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.addPhoto`, { photosetId, photoId }, {}, `write`)
}
