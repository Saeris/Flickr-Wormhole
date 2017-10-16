import Flickr from "@/flickr"

export default function setContext({ flickr = Flickr, photoId = ``, context = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.geo.setContext`, { photoId, context }, {}, `write`)
}
