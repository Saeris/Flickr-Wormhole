import Flickr from "@/flickr"

async function editPhotos({ apiKey = Flickr.apiKey, galleryId = ``, primaryPhotoId = ``, photoIds = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.galleries.editPhotos`,
    { apiKey, galleryId, primaryPhotoId, photoIds },
    {},
    `write`
  )
}

export default editPhotos
