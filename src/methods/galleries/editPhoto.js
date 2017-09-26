import Flickr from "@/flickr"

export default async function editPhoto({ apiKey = Flickr.apiKey, galleryId = ``, photoId = ``, comment = `` } = {}) {
  return await Flickr.fetchResource(`flickr.galleries.editPhoto`, { apiKey, galleryId, photoId, comment }, {}, `write`)
}
