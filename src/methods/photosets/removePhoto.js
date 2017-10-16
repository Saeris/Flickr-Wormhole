import Flickr from "@/flickr"

export default function removePhoto({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.removePhoto`, { photosetId, photoId }, {}, `write`)
}
