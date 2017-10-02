import Flickr from "@/flickr"

async function getFavorites({ flickr = Flickr, photoId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(`flickr.photos.getFavorites`, { photoId }, { page, perPage })
}

export default getFavorites
