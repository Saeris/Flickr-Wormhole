import Flickr from "@/flickr"

export default function getGeoPerms({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.prefs.getGeoPerms`, {}, {}, `read`)
}
