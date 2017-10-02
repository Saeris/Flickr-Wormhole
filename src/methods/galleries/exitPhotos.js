import Flickr from "@/flickr"

async function editPhotos({ flickr = Flickr, galleryId = ``, primaryPhotoId = ``, photoIds = `` } = {}) {
  return await flickr.fetchResource(`flickr.galleries.editPhotos`, { galleryId, primaryPhotoId, photoIds }, {}, `write`)
}

export default editPhotos
