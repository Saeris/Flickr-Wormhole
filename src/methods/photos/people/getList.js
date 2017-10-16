import Flickr from "@/flickr"

export default function getList({ flickr = Flickr, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.people.getList`, { photoId })
}
