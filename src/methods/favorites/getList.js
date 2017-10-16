import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr } = {},
  { userId = ``, minFaveDate = ``, maxFaveDate = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(
    `flickr.favorites.getList`,
    {},
    { userId, minFaveDate, maxFaveDate, extras, page, perPage }
  )
}
