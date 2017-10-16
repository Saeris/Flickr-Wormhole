import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr, userId = `` } = {},
  { primaryPhotoExtras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.galleries.getList`, { userId }, { primaryPhotoExtras, page, perPage })
}
