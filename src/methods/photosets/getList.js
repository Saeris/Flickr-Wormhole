import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr } = {},
  { userId = ``, primaryPhotoExtras = ``, page = 0, perPage = 0 } = {}
) {
  return flickr.fetchResource(`flickr.photosets.getList`, {}, { userId, primaryPhotoExtras, page, perPage })
}
