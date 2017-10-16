import Flickr from "@/flickr"

export default function checkToken({ flickr = Flickr, authToken = `` } = {}) {
  return flickr.fetchResource(`flickr.auth.checkToken`, { authToken })
}
