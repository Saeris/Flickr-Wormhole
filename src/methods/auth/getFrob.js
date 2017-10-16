import Flickr from "@/flickr"

export default function getFrob({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.auth.getFrob`)
}
