import Flickr from "@/flickr"

export default function getFavorites({ flickr = Flickr, photoId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return flickr.fetchResource(`flickr.photos.getFavorites`, { photoId }, { page, perPage })
}
