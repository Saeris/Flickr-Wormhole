import Flickr from "@/flickr"

export default function setTags({ flickr = Flickr, photoId = ``, tags = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.setTags`, { photoId, tags }, {}, `write`)
}
