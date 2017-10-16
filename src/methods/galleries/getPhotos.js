import Flickr from "@/flickr"

export default function getPhotos(
  { flickr = Flickr, galleryId = `` } = {},
  { extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.galleries.getPhotos`, { galleryId }, { extras, page, perPage })
}
