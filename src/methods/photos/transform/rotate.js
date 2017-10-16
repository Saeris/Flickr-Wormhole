import Flickr from "@/flickr"

export default function rotate({ flickr = Flickr, photoId = ``, degrees = 0 } = {}) {
  return flickr.fetchResource(`flickr.photos.transform.rotate`, { photoId, degrees }, {}, `write`)
}
