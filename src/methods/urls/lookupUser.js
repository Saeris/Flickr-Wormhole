import Flickr from "@/flickr"

export default function lookupUser({ flickr = Flickr, url = `` } = {}) {
  return flickr.fetchResource(`flickr.urls.lookupUser`, { url })
}
