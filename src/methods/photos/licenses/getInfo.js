import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.photos.licenses.getInfo`)
}
