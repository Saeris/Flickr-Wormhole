import Flickr from "@/flickr"

async function getPublicList(
  { flickr = Flickr, userId = `` } = {},
  { minFaveDate = ``, maxFaveDate = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return await flickr.fetchResource(
    `flickr.favorites.getPublicList`,
    { userId },
    { minFaveDate, maxFaveDate, extras, page, perPage }
  )
}

export default getPublicList
