import Flickr from "@/flickr"

export default function deleteCoords({ flickr = Flickr, photoId = ``, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.people.deleteCoords`, { photoId, userId }, {}, `write`)
}
