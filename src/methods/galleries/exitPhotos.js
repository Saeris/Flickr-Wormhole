import Flickr from "@/flickr"

export default function editPhotos({ flickr = Flickr, galleryId = ``, primaryPhotoId = ``, photoIds = `` } = {}) {
  return flickr.fetchResource(`flickr.galleries.editPhotos`, { galleryId, primaryPhotoId, photoIds }, {}, `write`)
}
