import Flickr from "@/flickr"

export default function getMethods({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.reflection.getMethods`)
}
