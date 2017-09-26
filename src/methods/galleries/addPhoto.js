import Flickr from "@/flickr"

export default async function addPhoto(
  { apiKey = Flickr.apiKey, galleryId = ``, photoId = `` } = {},
  { comment = `` } = {}
) {
  return await Flickr.fetchResource(`flickr.galleries.addPhoto`, { apiKey, galleryId, photoId }, { comment }, `write`)
}
