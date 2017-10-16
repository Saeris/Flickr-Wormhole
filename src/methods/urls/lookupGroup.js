import Flickr from "@/flickr"

export default function lookupGroup({ flickr = Flickr, url = `` } = {}) {
  return flickr.fetchResource(`flickr.urls.lookupGroup`, { url })
}
