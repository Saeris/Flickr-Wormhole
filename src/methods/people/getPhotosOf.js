import Flickr from "@/flickr"

export default function getPhotosOf(
  { flickr = Flickr, userId = `` } = {},
  { ownerId = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.people.getPhotosOf`, { userId }, { ownerId, extras, page, perPage })
}
