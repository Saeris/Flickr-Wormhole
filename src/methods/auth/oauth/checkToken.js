import Flickr from "@/flickr"

export default function checkToken({ flickr = Flickr, oauthToken = `` } = {}) {
  return flickr.fetchResource(`flickr.auth.oauth.checkToken`, { oauthToken })
}
