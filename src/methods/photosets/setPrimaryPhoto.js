import Flickr from "@/flickr"

export default function setPrimaryPhoto({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.setPrimaryPhoto`, { photosetId, photoId }, {}, `write`)
}
