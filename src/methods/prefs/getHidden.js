import Flickr from "@/flickr"

export default function getHidden({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.prefs.getHidden`, {}, {}, `read`)
}
