import Flickr from "@/flickr"

export default function getPrivacy({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.prefs.getPrivacy`, {}, {}, `read`)
}
