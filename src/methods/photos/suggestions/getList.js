import Flickr from "@/flickr"

export default function getList({ flickr = Flickr } = {}, { photoId = ``, statusId = `0` } = {}) {
  return flickr.fetchResource(`flickr.photos.suggestions.getList`, {}, { photoId, statusId }, `read`)
}
