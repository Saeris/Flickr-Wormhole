import Flickr from "@/flickr"

async function getList({ flickr = Flickr } = {}, { userId = ``, primaryPhotoExtras = ``, page = 0, perPage = 0 } = {}) {
  return await flickr.fetchResource(`flickr.photosets.getList`, {}, { userId, primaryPhotoExtras, page, perPage })
}

export default getList
