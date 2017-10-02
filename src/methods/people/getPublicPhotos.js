import Flickr from "@/flickr"

async function getPublicPhotos(
  { flickr = Flickr, userId = `` } = {},
  { safeSearch = 0, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(`flickr.people.getPublicPhotos`, { userId }, { safeSearch, extras, page, perPage })
}

export default getPublicPhotos
