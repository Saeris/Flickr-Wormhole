import Flickr from "@/flickr"

async function getList(
  { apiKey = Flickr.apiKey } = {},
  { userId = ``, minFaveDate = ``, maxFaveDate = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.favorites.getList`,
    { apiKey },
    { userId, minFaveDate, maxFaveDate, extras, page, perPage }
  )
}

export default getList
