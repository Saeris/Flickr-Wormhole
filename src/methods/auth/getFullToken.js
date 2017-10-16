import Flickr from "@/flickr"

export default function getFullToken({ flickr = Flickr, miniToken = `` } = {}) {
  return flickr.fetchResource(`flickr.auth.getFullToken`, { miniToken })
}
