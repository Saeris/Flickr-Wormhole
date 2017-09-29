import Flickr from "@/flickr"

async function getListForPhoto({ apiKey = Flickr.apiKey, photoId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.galleries.getListForPhoto`, { apiKey, photoId }, { page, perPage })
}

export default getListForPhoto
