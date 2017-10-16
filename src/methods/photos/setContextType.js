import Flickr from "@/flickr"

export default function setContextType({ flickr = Flickr, photoId = ``, contentType = 0 } = {}) {
  return flickr.fetchResource(`flickr.photos.setContentType`, { photoId, contentType }, {}, `write`)
}
