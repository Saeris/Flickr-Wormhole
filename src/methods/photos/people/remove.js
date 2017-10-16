import Flickr from "@/flickr"

export default function remove({ flickr = Flickr, photoId = ``, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.people.delete`, { photoId, userId }, {}, `write`)
}
