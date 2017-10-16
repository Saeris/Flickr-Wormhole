import Flickr from "@/flickr"

export default function getContentType({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.prefs.getContentType`, {}, {}, `read`)
}
