import Flickr from "@/flickr"

async function addPhoto({ flickr = Flickr, galleryId = ``, photoId = `` } = {}, { comment = `` } = {}) {
  return await flickr.fetchResource(`flickr.galleries.addPhoto`, { galleryId, photoId }, { comment }, `write`)
}

export default addPhoto
