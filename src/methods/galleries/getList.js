import Flickr from "@/flickr"

async function getList(
  { flickr = Flickr, userId = `` } = {},
  { primaryPhotoExtras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(`flickr.galleries.getList`, { userId }, { primaryPhotoExtras, page, perPage })
}

export default getList
