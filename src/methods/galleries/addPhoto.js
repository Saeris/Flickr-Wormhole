import Flickr from "@/flickr"

async function addPhoto({ apiKey = Flickr.apiKey, galleryId = ``, photoId = `` } = {}, { comment = `` } = {}) {
  return await Flickr.fetchResource(`flickr.galleries.addPhoto`, { apiKey, galleryId, photoId }, { comment }, `write`)
}

export default addPhoto
