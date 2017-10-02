import Flickr from "@/flickr"

async function getList({ flickr = Flickr } = {}, { photoId = ``, statusId = `0` } = options) {
  return await flickr.fetchResource(`flickr.photos.suggestions.getList`, {}, { photoId, statusId }, `read`)
}

export default getList
