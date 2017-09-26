import Flickr from "@/flickr"

export default async function editPhotos(
  { apiKey = Flickr.apiKey, galleryId = ``, primaryPhotoId = ``, photoIds = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.galleries.editPhotos`,
    { apiKey, galleryId, primaryPhotoId, photoIds },
    {},
    `write`
  )
}
