import Flickr from "@/flickr"

async function editPhotos({ apiKey = Flickr.apiKey, photosetId = ``, primaryPhotoId = ``, photoIds = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photosets.editPhotos`,
    { apiKey, photosetId, primaryPhotoId, photoIds },
    {},
    `write`
  )
}

export default editPhotos
