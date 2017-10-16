import Flickr from "@/flickr"

export default function getPublicPhotos(
  { flickr = Flickr, userId = `` } = {},
  { safeSearch = 0, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.people.getPublicPhotos`, { userId }, { safeSearch, extras, page, perPage })
}
