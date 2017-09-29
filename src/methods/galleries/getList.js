import Flickr from "@/flickr"

async function getList(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { primaryPhotoExtras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.galleries.getList`,
    { apiKey, userId },
    { primaryPhotoExtras, page, perPage }
  )
}

export default getList
