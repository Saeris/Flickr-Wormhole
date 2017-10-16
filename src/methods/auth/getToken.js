import Flickr from "@/flickr"

export default function getToken({ flickr = Flickr, frob = `` } = {}) {
  return flickr.fetchResource(`flickr.auth.getToken`, { frob })
}
