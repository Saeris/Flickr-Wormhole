import Flickr from "@/flickr"

async function getPublicPhotos(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { safeSearch = 0, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.people.getPublicPhotos`,
    { apiKey, userId },
    { safeSearch, extras, page, perPage }
  )
}

export default getPublicPhotos
