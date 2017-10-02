import Flickr from "@/flickr"

async function getListForPhoto({ flickr = Flickr, photoId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.galleries.getListForPhoto`, { photoId }, { page, perPage })
}

export default getListForPhoto
