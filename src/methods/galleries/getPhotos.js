import Flickr from "@/flickr"

export default async function getPhotos(
  { apiKey = Flickr.apiKey, galleryId = `` } = {},
  { extras = ``, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(`flickr.galleries.getPhotos`, { apiKey, galleryId }, { extras, page, perPage })
}
