import Flickr from "@/flickr"

export default function getSafetyLevel({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.prefs.getSafetyLevel`, {}, {}, `read`)
}
