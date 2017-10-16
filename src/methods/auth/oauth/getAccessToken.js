import Flickr from "@/flickr"

export default function getAccessToken({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.auth.oauth.getAccessToken`)
}
