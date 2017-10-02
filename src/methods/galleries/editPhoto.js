import Flickr from "@/flickr"

async function editPhoto({ flickr = Flickr, galleryId = ``, photoId = ``, comment = `` } = {}) {
  return await flickr.fetchResource(`flickr.galleries.editPhoto`, { galleryId, photoId, comment }, {}, `write`)
}

export default editPhoto
