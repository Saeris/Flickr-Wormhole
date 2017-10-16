import Flickr from "@/flickr"

export default function reorderPhotos({ flickr = Flickr, photosetId = ``, photoIds = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.reorderPhotos`, { photosetId, photoIds }, {}, `write`)
}
