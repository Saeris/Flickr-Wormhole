import Flickr from "@/flickr"

export default function getPublicList(
  { flickr = Flickr, userId = `` } = {},
  { minFaveDate = ``, maxFaveDate = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(
    `flickr.favorites.getPublicList`,
    { userId },
    { minFaveDate, maxFaveDate, extras, page, perPage }
  )
}
