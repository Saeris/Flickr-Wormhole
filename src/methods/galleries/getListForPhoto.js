import Flickr from "@/flickr"

export default function getListForPhoto({ flickr = Flickr, photoId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.galleries.getListForPhoto`, { photoId }, { page, perPage })
}
