import Flickr from "@/flickr"

export default function removePhotos({ flickr = Flickr, photosetId = ``, photoIds = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.removePhotos`, { photosetId, photoIds }, {}, `write`)
}
