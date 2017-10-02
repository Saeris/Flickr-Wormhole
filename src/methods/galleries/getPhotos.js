import Flickr from "@/flickr"

async function getPhotos({ flickr = Flickr, galleryId = `` } = {}, { extras = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.galleries.getPhotos`, { galleryId }, { extras, page, perPage })
}

export default getPhotos
