import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, photosetId = ``, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.getInfo`, { photosetId, userId })
}
