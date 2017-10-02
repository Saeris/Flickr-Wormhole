import Flickr from "@/flickr"

async function editPhotos({ flickr = Flickr, photosetId = ``, primaryPhotoId = ``, photoIds = `` } = {}) {
  return await flickr.fetchResource(
    `flickr.photosets.editPhotos`,
    { photosetId, primaryPhotoId, photoIds },
    {},
    `write`
  )
}

export default editPhotos
