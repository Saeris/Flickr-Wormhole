import Flickr from "@/flickr"

export default function addTags({ flickr = Flickr, photoId = ``, tags = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.addTags`, { photoId, tags }, {}, `write`)
}
