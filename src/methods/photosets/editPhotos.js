import Flickr from "@/flickr"

export default function editPhotos({ flickr = Flickr, photosetId = ``, primaryPhotoId = ``, photoIds = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.editPhotos`, { photosetId, primaryPhotoId, photoIds }, {}, `write`)
}
